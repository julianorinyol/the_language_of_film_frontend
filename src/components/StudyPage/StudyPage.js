import React from "react";
import './StudyPage.scss'
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
  },
  films: {
  	marginBottom: 10,
  	color: 'grey'

  }
});

let StudyPage = (props) => {
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

	return (
		<React.Fragment>
		  <CssBaseline />
	
		  {	currentItem && (
		  <Container tabIndex="0" onKeyDown={onKeyDown} className={classes.container}>
		  	<Box className={classes.studyPageBox}>
		  		  { props.films && (
		  		  		<div className={classes.films}>
		  		  			showing words from films: {Object.values(props.films).filter(x=> x.selected).map((film, i) => {
		  		  				return film.name
		  		  			}).join(', ')}
		  		  		</div>
		  		  	)
		  			}
		    	<Card item={currentItem} />
		    	<Button onClick={(e)=> changeItemIndex(-1)} color="primary" size="small">Previous</Button>
		    	<Button onClick={(e)=> changeItemIndex(1)} color="primary" size="small">Next</Button>
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

StudyPage.propTypes = {
	items: PropTypes.objectOf(PropTypes.shape(itemShape)).isRequired,
	currentIndex: PropTypes.number.isRequired
}

const wrapperHigherOrderComponents = compose(StudyPageContainerWrapper)

export const StudyPageContainer = wrapperHigherOrderComponents(StudyPage)
