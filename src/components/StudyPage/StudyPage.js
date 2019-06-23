import React from "react";
import StudySection from '../StudySection/StudySection'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
  },
});

let StudyPage = (props) => {
	const classes = useStyles();
	const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

	function changeItemIndex(newCurrentItemIndex) {
		const length = props.items.length 
		const inBounds = 0 < newCurrentItemIndex < length
		if(inBounds) {
			setCurrentItemIndex(newCurrentItemIndex);
		}
	}

	let currentItem = props.items[currentItemIndex]
	function onKeyDown(e) {
		if(e.key === 'ArrowLeft') {
			changeItemIndex(currentItemIndex - 1)
		} else if(e.key === 'ArrowRight') {
			changeItemIndex(currentItemIndex + 1)
		}
	}

	return (
		<React.Fragment>
		  <CssBaseline />
		  <Container tabIndex="0" onKeyDown={onKeyDown} className={classes.container}>
		    <StudySection item={currentItem} />
		    <Button onClick={(e)=> changeItemIndex(currentItemIndex - 1)} color="primary" size="small">Previous</Button>
		    <Button onClick={(e)=> changeItemIndex(currentItemIndex + 1)} color="primary" size="small">Next</Button>
		  </Container>
		</React.Fragment>
		
	)
}

const itemShape = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
}

StudyPage.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired
}

export default StudyPage