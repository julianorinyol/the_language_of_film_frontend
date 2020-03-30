import  React, { useState } from 'react';
import './WordsBulkAddPage.scss'
import { makeStyles } from '@material-ui/core/styles';



import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { compose } from 'redux'
// import FilmPageContainerWrapper from '../../containers/FilmPageContainer/FilmPageContainer'
import WordsContainer from '../../containers/WordsContainer'

/*
MEGA NOTE!!!!
MEGA NOTE!!!!
MEGA NOTE!!!!
MEGA NOTE!!!!
MEGA NOTE!!!!
MEGA NOTE!!!!


You should add anything that is one word long as a word, and anything longer as a phrase
and they should be added with the translations of each other. 

*/

const parseWords = (wordsCSV) => {
  const split = wordsCSV.split('\n').filter(x => !!x)
  const words = []
  const headers = split[0].split(',')
  split.slice(1).forEach((rowString, i) => {
    const row  = rowString.split(',')
    const merged = headers.reduce((acc, val, i) => {
      const res = {
        ...acc, 
        [headers[i]]: row[i], 
      }
      return res
    }, {})
    words.push(merged)
  })
  return words
}

const transformWords = rawWords => {
  return  rawWords.map(rawWord => ({
    word: rawWord.de,
    language: 'de',
    //
    translations: [
      {
        word: rawWord.en,
        language: 'en',  
      }
    ],
    phrases: []
  }))
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

let WordsBulkAddPageComponent = (props) => {
  const [words, setWords] = useState("");

  const classes = useStyles();
	return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Add words, Bulk style!
        </Typography>

        <p>
          example csv
        </p>
        <div className="example-csv">
          <p>de,en,show,season,episode</p>
          <p>das ist doch Kacke,that's shit,Faulty Towers,2,2</p>
          <p>er shnuppert,he sniffs,Faulty Towers,2,2</p>
          <p>hast du gebumst?,did you bang,Faulty Towers,2,2</p>
        </div>

        <form className={classes.form} onSubmit={evt => {
          evt.preventDefault()
          const parsed = parseWords(words)
          const transformed = transformWords(parsed)

          return props.addWords(transformed)
        }}
        noValidate>
 
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="words"
            label="CSV of words."
            name="words"
            autoComplete="words"
            value={words}
            multiline
            onChange={e => setWords(e.target.value)}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Submit
          </Button>
        </form>
      </div>

    </Container>
  );


}


const wrapperHigherOrderComponents = compose(WordsContainer)

export const WordsBulkAddPage = wrapperHigherOrderComponents(WordsBulkAddPageComponent)
