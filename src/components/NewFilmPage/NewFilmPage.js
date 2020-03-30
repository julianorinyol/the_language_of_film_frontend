import  React, { useState } from 'react';
import './NewFilmPage.scss'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { compose } from 'redux'
import FilmPageContainerWrapper from '../../containers/FilmPageContainer/FilmPageContainer'


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

let NewFilmPage = (props) => {
  const [name, setFilmName] = useState("");

  const classes = useStyles();
	return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Add Film
        </Typography>
        <form className={classes.form} onSubmit={evt => {
          evt.preventDefault()

          return props.addFilm({name})
        }}
        noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="name"
            label="Film Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={e => setFilmName(e.target.value)}
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


const wrapperHigherOrderComponents = compose(FilmPageContainerWrapper)

export const NewFilmPageContainer = wrapperHigherOrderComponents(NewFilmPage)
