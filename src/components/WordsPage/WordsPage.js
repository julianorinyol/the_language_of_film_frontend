import React from 'react'
import Word from '../Word/Word'
import { compose } from 'redux'
import WordsContainer from '../../containers/WordsContainer'
import { Link } from 'react-router-dom';


const WordsPage = (props) => {
	const { words } = props
	return (
		<div>
			<Link to="/words/bulkadd">bulk add words</Link>
			<p> words you've added to learn</p>
			<div>
				{words && Object.values(words).map((word, i) => {
					return <Word key={word.question} word={word} />
				})}
			</div>
		</div>
	)
}

const wrapperHigherOrderComponents = compose(WordsContainer)
export const WordsPageContainer = wrapperHigherOrderComponents(WordsPage)