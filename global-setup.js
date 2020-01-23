import axios from 'axios'
const { setup: setupDevServer } = require('jest-dev-server')
console.log(`Jest global setup - building and running local server for puppeteer to access`)
const port = 3000

module.exports = async function globalSetup() {
	await axios.get(`http://localhost:${port}`).then(res => {
		console.log(`Server already running on http://localhost:${port} so no need to create one.`)
	}).catch(err => {
		console.log(`Server not running on http://localhost:${port}. Creating one now. Will be disabled after tests.`)
		if(err.code == 'ECONNREFUSED') {
			return setupDevServer({
				command: `yarn build-production && PORT=${port} yarn start`,
				launchTimeout: 50000,
				port,
			})
		}

	})
}