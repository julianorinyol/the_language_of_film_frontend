import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '../Card/Card'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


let StudySection = (props) => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	function handleChange(event, openValue) {
		setOpen(openValue);
	}

	const { item } = props
	return (
		<Card item={ item }/>
	)
}

StudySection.propTypes = {
	item: PropTypes.object.isRequired
}

export default StudySection

/*
		<div>
			{ item.question }
			{ open ? 
				item.answer
				: (
					<Button onClick={(e)=> handleChange(e, true)} variant="contained" color="primary" className={classes.button}>
					   See Answer
					</Button>
				)
			}
			
		</div>
*/