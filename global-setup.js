import axios from 'axios'
const { setup: setupDevServer } = require('jest-dev-server')
console.log(`Jest global setup - Testing if dependencies are running. Checking frontend and backend servers for end to end tests.`)
const frontendPort = parseInt(process.env.REACT_APP_FRONT_END_PORT)
const backendPort = parseInt(process.env.REACT_APP_BACK_END_PORT)

const pingServer = async (url, name) => {
	return axios.get(url).then(res => {
		console.log(`${name} server already running at ${url} so no need to create one.`)
		return true
	}).catch(err => {
		console.log(`${name} server not running at ${url}. Creating one now. Will be disabled after tests.`)
		if(err.code == 'ECONNREFUSED') {
			return false
		}
	})
}

const launchTimeOutMilliseconds = 50000
module.exports = async function globalSetup() {
	const serverConfigs = [
		{
			name: `Frontend`,
			url: process.env.REACT_APP_FRONT_END_URL,
			config: {
				command: `yarn build-production && PORT=${frontendPort} yarn start`,
				launchTimeout: launchTimeOutMilliseconds,
				port: frontendPort,
			},
		},
		{
			name: `Backend`,
			url: process.env.REACT_APP_BACK_END_STATUS_URL,
			config: {
				command: 'node mockbackend.js',
				launchTimeout: launchTimeOutMilliseconds,
				port: backendPort,
			}
		}
	]

	const serversToStart = []
	for(const server of serverConfigs) {
		const serverIsRunning = await pingServer(server.url, server.name)
		
		if(!serverIsRunning) {
			serversToStart.push(server.config)
		}	
	}

	if(serversToStart.length > 0) {
		return setupDevServer(serversToStart)
	}
}