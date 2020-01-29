const express = require('express')
var cors = require('cors')
const mockApiReplies = {
	cards: JSON.stringify({"verdammte":{"question":"verdammte","answer":"damned -  english\nmaldita -  spanish\n","examples":["Wem gehört der verdammte Scheißhund","Ich liebe dich Verdammte Scheiße"]},"maldita":{"question":"maldita","answer":"verdammte -  german\ndamned -  english\n","examples":[]},"damned":{"question":"damned","answer":"verdammte -  german\nmaldita -  spanish\n","examples":[]}}),
	words: JSON.stringify({"verdammte":{"translations":["5e2abbe1df15cf0d44421a12","5e2abbe1df15cf0d44421a13"],"phrases":["5e2abbe1df15cf0d44421a14","5e2abbe1df15cf0d44421a15"],"_id":"5e2abbe1df15cf0d44421a11","word":"verdammte","language":"german","createdAt":"2020-01-24T09:41:55.429Z","updatedAt":"2020-01-24T09:41:55.429Z","__v":0},"maldita":{"translations":["5e2abbe1df15cf0d44421a11","5e2abbe1df15cf0d44421a12"],"phrases":[],"_id":"5e2abbe1df15cf0d44421a13","word":"maldita","language":"spanish","createdAt":"2020-01-24T09:41:55.431Z","updatedAt":"2020-01-24T09:41:55.431Z","__v":0},"damned":{"translations":["5e2abbe1df15cf0d44421a11","5e2abbe1df15cf0d44421a13"],"phrases":[],"_id":"5e2abbe1df15cf0d44421a12","word":"damned","language":"english","createdAt":"2020-01-24T09:41:55.430Z","updatedAt":"2020-01-24T09:41:55.430Z","__v":0}}),
	films: JSON.stringify([{"name":"movie 2","img":"https://images.all-free-download.com/images/graphiclarge/movie_poster_background_art_vector_530172.jpg"},{"name":"movie 1","img":"https://images.all-free-download.com/images/graphiclarge/movie_poster_background_art_vector_530172.jpg"}]),
}


//server.js
const path = require('path');
const port = 8000;
const app = express();
app.get('/ping', cors(), function (req, res) {
	console.log(`pong`)
	return res.send('pong');
});


for( const endpoint in mockApiReplies) {
	const route = `/api/v1/${endpoint}`
	const data = mockApiReplies[endpoint]
	
	app.get(route, cors(), function (req, res) {		
		return res.send(data)
	});
}

app.listen(port, function () {
	console.log(`Express server running on port: ${port}`)	
});
