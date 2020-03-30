import React from "react";
import './VocabularyPage.scss'
import VocabularyCard from '../VocabularyCard/VocabularyCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux'
import VocabularyPageContainerWrapper from '../../containers/VocabularyPageContainer/VocabularyPageContainer'

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
  },
  studyPageBox: {
  	minWidth: 275,
    maxWidth: 700,
    margin: 'auto',
  },
  films: {
  	marginBottom: 10,
  	color: 'grey'

  }
});



export const classNames = {
	previousButton: `study-page--previous-button`,
	nextButton: `study-page--next-button`
} 

let VocabularyPage = (props) => {
	const classes = useStyles();
	
	const itemKeys = Object.keys(props.items)
	const total = itemKeys.length
	
	function changeItemIndex(changeNum) {
		const newCurrentItemIndex = props.currentIndex + changeNum

		const inBounds = ( 0 <= newCurrentItemIndex ) && ( newCurrentItemIndex < total)

		if(inBounds) {
			props.changeItemIndex(changeNum)
		}
	}

	let currentItemKey = itemKeys[props.currentIndex]
	let currentItem = props.items[currentItemKey]

	function onKeyDown(e) {
		if(e.key === 'ArrowLeft') {
			changeItemIndex(-1)
		} else if(e.key === 'ArrowRight') {
			changeItemIndex(1)
		}
	}
	
	const submitProgress = (item, progressNum) => {
		console.log(`item`, item)
		console.log(`progressNum`, progressNum)
		const reviewData = {
			itemId: item.id,
			itemType: 'word',
			itemText: item.question,
			percentage: progressNum
		}
		console.log(`VocabularyPage->submitProgress`)
	  	console.log(`submitted: ${progressNum}`)

		return props.submitReview(reviewData).then(x => {
			return changeItemIndex(1)
		})
	
	}

	return (
		<React.Fragment>
		  <CssBaseline />
	
		  {	currentItem && (
		  <Container tabIndex="0" onKeyDown={onKeyDown} className={classes.container}>
		  	<p>the purpose of this page, is to go through words and mark the degree in which you know that word on a scale of 5 options: 0, 25, 50, 75, 100</p>
		  	<Box className={classes.studyPageBox}>
		  		  { props.films && (
		  		  		<div className={classes.films}>
		  		  			showing words from: {Object.values(props.films).filter(x=> x.selected).map((film, i) => {
		  		  				return film.name
		  		  			}).join(', ')}
		  		  		</div>
		  		  	)
		  			}
		    	<VocabularyCard submitProgress={submitProgress} item={currentItem} />
		    	<Button className={classNames.previousButton} onClick={(e)=> changeItemIndex(-1)} color="primary" size="small">Previous</Button>
		    	<Button className={classNames.nextButton} onClick={(e)=> changeItemIndex(1)} color="primary" size="small">Next</Button>
		    	<Typography>{props.currentIndex + 1} / {total}</Typography>
		    </Box>
		  </Container>
		  )
			}
			<div className="page-description">
				<Typography>{props.message}</Typography> 
				<Typography>if you use the same browser, it will remember your progress (hopefully)</Typography> 
			</div>
		</React.Fragment>
	)
}

const itemShape = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
}

VocabularyPage.propTypes = {
	items: PropTypes.objectOf(PropTypes.shape(itemShape)).isRequired,
	currentIndex: PropTypes.number.isRequired
}

const wrapperHigherOrderComponents = compose(VocabularyPageContainerWrapper)

export const VocabularyPageContainer = wrapperHigherOrderComponents(VocabularyPage)
