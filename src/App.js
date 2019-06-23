import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import WordsPage from './components/WordsPage/WordsPage'
import StudyPage from './components/StudyPage/StudyPage'
import Lehmann from './data/herr_lehmann.json'
import BlacklistPage from './components/BlacklistPage/BlacklistPage'
import { defaultBlacklist } from './constants'

function AppRouter() {
  const filterdWords = Lehmann.words.filter(word => {
    return defaultBlacklist.indexOf(word.word.trim()) === -1
  })

  return (
    <Router>
      <div>
        <Navigation />
        <Route 
          path="/" 
          exact
          render={() => {
            return <StudyPage items={convertWords(filterdWords)}/>
          }} 
        />
        <Route 
          path="/study/" 
          render={() => {
            return <StudyPage items={convertWords(filterdWords)}/>
          }} 
        />
        <Route 
          path="/words/" 
          render={() => {
            return <WordsPage words={filterdWords}/>
          }} 
        />
        <Route 
          path="/blacklist/" 
          render={() => {
            return <BlacklistPage blacklist={defaultBlacklist}/>
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
      examples: JSON.parse(word.examples)
    })

  }

  return converted
}

export default AppRouter;