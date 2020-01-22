import React from 'react'
import PropTypes from 'prop-types'
import './Word.scss'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



const Word = (props) => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	function handleChange(event, openValue) {
		setOpen(openValue);
	}

	const { word } = props
	return (
		<div className="word" key={word.question}>
			<span className='word-question'>{ word.question }</span>
		
			{ open ? 
				<pre className='word-answer'>{word.answer}</pre>
				: (
					<Button onClick={(e)=> handleChange(e, true)} variant="contained" color="primary" className={classes.button}>
					   See Answer
					 </Button>
				)
			}
		</div>
	)
}

Word.propTypes = {
	word: PropTypes.object.isRequired
}

export default Word