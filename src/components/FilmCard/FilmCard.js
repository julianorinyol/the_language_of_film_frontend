import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
    // minWidth: 150,
    // maxWidth: 150,
    // height: 265
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '143%', // trial and error value :/
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const filmClickHandler = (evt) => console.log(`film clicked!`, evt.target.title)

export default function FilmCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
       <CardMedia
       	className={'FilmCard ' + classes.media}
        image={props.film.img}
        title={props.film.name}
        onClick={filmClickHandler}
      />
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
          { props.film.name }
        </Typography>
      </CardContent>
    </Card>
  );
}
