import React from "react";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation/Navigation'
import { WordsPageContainer } from './components/WordsPage/WordsPage'
import { StudyPageContainer } from './components/StudyPage/StudyPage'
import { VocabularyPageContainer } from './components/VocabularyPage/VocabularyPage'

import { FilmPageContainer } from './components/FilmPage/FilmPage'
import { ConnectedLoginPage } from './components/LoginPage/LoginPage'
import BlacklistPage from './components/BlacklistPage/BlacklistPage'
import { defaultBlacklist } from './constants'
import { connect } from 'react-redux'
import { logout } from './actions/LoginActions/LoginActions'
import { ConnectedProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

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
        <ConnectedProtectedRoute 
          path="/films/" 
          render={() => {
            return <FilmPageContainer />
          }} >
          <FilmPageContainer />
        </ConnectedProtectedRoute>
        <Route 
          path="/login/" 
          render={() => {
            return <ConnectedLoginPage />
          }} 
        />
        <Route 
          path="/logout/" 
          render={() => {
            props.logout()
            return <Redirect to="/login/" />
          }} 
        />
        <ConnectedProtectedRoute 
          path="/vocabulary/" 
        >
          <VocabularyPageContainer />
        </ConnectedProtectedRoute>
        <ConnectedProtectedRoute 
          path="/study/" 
        >
          <StudyPageContainer message="These are all of the words in the german subtitle file for the film Herr Lehmann. Some of the translations are wrong:) \n and some of the words came out of the script funny" />
        </ConnectedProtectedRoute>
        
        <ConnectedProtectedRoute 
          path="/words/" 
        >
          <WordsPageContainer />
        </ConnectedProtectedRoute>
        <ConnectedProtectedRoute 
          path="/blacklist/" 
          render={() => {
            return <BlacklistPage blacklist={defaultBlacklist}/>
          }} 
        />

      </div>
    </Router>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  }  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);