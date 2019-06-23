import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

let StudySection = (props) => {
	const { item } = props
	return (
		<Card item={ item }/>
	)
}

StudySection.propTypes = {
	item: PropTypes.object.isRequired
}

export default StudySection