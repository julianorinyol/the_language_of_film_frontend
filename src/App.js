import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import WordsPage from './components/WordsPage/WordsPage'
import StudyPage from './components/StudyPage/StudyPage'
import Lehmann from './data/herr_lehmann.json'

function Index() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={Index} />
        <Route 
          path="/study/" 
          render={() => {
            return <StudyPage items={convertWords(Lehmann.words)}/>
          }} 
        />
        <Route 
          path="/words/" 
          render={() => {
            return <WordsPage words={Lehmann.words}/>
          }} 
        />
      </div>
    </Router>
  );
}

function convertWords(words) {
  let converted = []

  for(const word of words) {
    converted.push({
      question: word.word,
      answer: word.english,
    })

  }

  return converted
}

export default AppRouter;