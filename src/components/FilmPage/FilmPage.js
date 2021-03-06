import React from "react";
import './FilmPage.scss'
import FilmCard from '../FilmCard/FilmCard'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';

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
  gridList: {
    width: 800
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

let FilmPage = (props) => {

  const classes = useStyles();
	return (
		<div className={classes.root}>
		<Link to="/films/new">Add Film</Link>
		     <GridList spacing={20} cols={4} cellHeight={500} className={classes.gridList}>

		       <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
		         <ListSubheader component="div">Films</ListSubheader>
		       </GridListTile>
			       { Object.values(props.films).map(( film, i ) => {
			       	return (
			       		<GridListTile key={i}>
			       			<FilmCard film={film} />
			       		</GridListTile>
			       		)
			       })}
		     </GridList>
		   </div>
	)
}

const wrapperHigherOrderComponents = compose(FilmPageContainerWrapper)

export const FilmPageContainer = wrapperHigherOrderComponents(FilmPage)
