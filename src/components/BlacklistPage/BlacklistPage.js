
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
  },
  blackListSection: {

  }
});

let BlackListPage = (props) => {
	const classes = useStyles();

	return (
		<React.Fragment>
		  <CssBaseline />
		  <Container tabIndex="0" className={classes.container}>
		  	<section className={classes.blackListSection}>
			  	{props.blacklist.map((word, i) => {
			  		return <div key={word}>{word}</div>
			  	})}
		  	</section>
		  </Container>
		</React.Fragment>
		
	)
}


BlackListPage.propTypes = {
	blacklist: PropTypes.array.isRequired
}

export default BlackListPage