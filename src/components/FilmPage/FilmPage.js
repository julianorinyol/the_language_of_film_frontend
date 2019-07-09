import React from "react";
import './FilmPage.scss'
import FilmCard from '../FilmCard/FilmCard'


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

// import Card from '../Card/Card'
// import Container from '@material-ui/core/Container';
// import PropTypes from 'prop-types'
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
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
    width: 800,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

let FilmPage = (props) => {

  const classes = useStyles();
	return (
		<div className={classes.root}>
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
	// return (
	// 	<div>
	// 		<h1>Select one or more films to add their words to the study material</h1>
	// 		<div className='films'>
				// { Object.values(props.films).map(( film, i ) => {
				// 	return <FilmCard film={film} key={i} />
				// })}
	// 		</div>
	// 	</div>
	// )
}


/*
{tileData.map(tile => (
		         <GridListTile key={tile.img}>
		           <img src={tile.img} alt={tile.title} />
		           <GridListTileBar
		             title={tile.title}
		             subtitle={<span>by: {tile.author}</span>}
		             actionIcon={
		               <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
		                 <InfoIcon />
		               </IconButton>
		             }
		           />
		         </GridListTile>
		       ))}

*/

// const itemShape = {
// 	question: PropTypes.string.isRequired,
// 	answer: PropTypes.string.isRequired,
// }

// FilmPage.propTypes = {
// 	items: PropTypes.objectOf(PropTypes.shape(itemShape)).isRequired,
// 	currentIndex: PropTypes.number.isRequired
// }

// const wrapperHigherOrderComponents = compose(FilmPageContainerWrapper)

// export const FilmPageContainer = wrapperHigherOrderComponents(FilmPage)

const wrapperHigherOrderComponents = compose(FilmPageContainerWrapper)

export const FilmPageContainer = wrapperHigherOrderComponents(FilmPage)
