import React from "react";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import { WordsPageContainer } from './components/WordsPage/WordsPage'
import { StudyPageContainer } from './components/StudyPage/StudyPage'
import { FilmPageContainer } from './components/FilmPage/FilmPage'
import BlacklistPage from './components/BlacklistPage/BlacklistPage'
import { defaultBlacklist } from './constants'

function AppRouter(props) {
  return (
    <Router>
      <div>
        <Navigation />
        <Route 
          path="/" 
          exact
          render={() => {
            return <Redirect to="/films/" />
          }} 
        />
        <Route 
          path="/films/" 
          render={() => {
            return <FilmPageContainer />
          }} 
        />
        <Route 
          path="/study/" 
          render={() => {
            const message = "These are all of the words in the german subtitle file for the film Herr Lehmann. Some of the translations are wrong:) \n and some of the words came out of the script funny"
            return <StudyPageContainer message={message} />
          }} 
        />
        <Route 
          path="/words/" 
          render={() => {
            return <WordsPageContainer />
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


export default AppRouter;