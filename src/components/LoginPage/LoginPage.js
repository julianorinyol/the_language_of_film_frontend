import React from "react";
import './LoginPage.scss'
import FilmCard from '../FilmCard/FilmCard'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import LoginForm from './LoginForm'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/LoginActions/LoginActions'
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

export const LoginPage = (props) => {
  const classes = useStyles();
  
  if(!!props.token) {
    props.history.push('/films/')
  }

	return (
		<div className={classes.root}>
			<LoginForm submit={props.login} />
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  }  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }  
}

export const ConnectedLoginPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))