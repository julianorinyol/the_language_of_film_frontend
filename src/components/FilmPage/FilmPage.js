import React from "react";
import './FilmPage.scss'
import FilmCard from '../FilmCard/FilmCard'
// import Card from '../Card/Card'
// import Container from '@material-ui/core/Container';
// import PropTypes from 'prop-types'
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { compose } from 'redux'
import FilmPageContainerWrapper from '../../containers/FilmPageContainer/FilmPageContainer'

let FilmPage = (props) => {
	return (
		<div>
			<h1>Select one or more films to add their words to the study material</h1>
			<div className='films'>
				{ Object.values(props.films).map(( film, i ) => {
					return <FilmCard film={film} key={i} />
				})}
			</div>
		</div>
	)
}

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
