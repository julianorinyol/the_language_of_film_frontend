import React from "react";
import Card from '../Card/Card'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux'
import StudyPageContainerWrapper from '../../containers/StudyPageContainer/StudyPageContainer'

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
  },
  studyPageBox: {
  	minWidth: 275,
    maxWidth: 700,
    margin: 'auto',
  }
});

let StudyPage = (props) => {
	const classes = useStyles();
	
	function changeItemIndex(changeNum) {
		const newCurrentItemIndex = props.currentIndex + changeNum

		const length = props.items.length 
		const inBounds = ( 0 <= newCurrentItemIndex ) && ( newCurrentItemIndex < length)

		if(inBounds) {
			props.changeItemIndex(changeNum)
		}

	}

	// let currentItem = props.items[currentItemIndex]
	let currentItem = props.items[props.currentIndex]
	function onKeyDown(e) {
		if(e.key === 'ArrowLeft') {
			changeItemIndex(-1)
		} else if(e.key === 'ArrowRight') {
			changeItemIndex(1)
		}
	}
	const total = props.items.length
	return (
		<React.Fragment>
		  <CssBaseline />
		  {	currentItem && (
		  	<Container tabIndex="0" onKeyDown={onKeyDown} className={classes.container}>
		  	<Box className={classes.studyPageBox}>
		    	<Card item={currentItem} />
		    	<Button onClick={(e)=> changeItemIndex(-1)} color="primary" size="small">Previous</Button>
		    	<Button onClick={(e)=> changeItemIndex(1)} color="primary" size="small">Next</Button>
		    	{/*<Typography>{currentItemIndex + 1} / {total}</Typography>*/}
		    	<Typography>{props.currentIndex + 1} / {total}</Typography>
		    </Box>
		  </Container>
		  )
			}
		</React.Fragment>
		
	)
}

const itemShape = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
}

StudyPage.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
	currentIndex: PropTypes.number.isRequired
}


const wrapperHigherOrderComponents = compose(StudyPageContainerWrapper)

export const StudyPageContainer = wrapperHigherOrderComponents(StudyPage)
