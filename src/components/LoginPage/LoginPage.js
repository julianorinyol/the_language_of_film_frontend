import React from "react";
import './LoginPage.scss'
import { makeStyles } from '@material-ui/core/styles';

import LoginForm from './LoginForm'

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