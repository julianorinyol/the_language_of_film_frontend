import React from 'react'
import Word from '../Word/Word'
import { compose } from 'redux'
import WordsContainer from '../../containers/WordsContainer'
const WordsPage = (props) => {
	const { words } = props
	return (
		<div>
			<p>this is all of the words from Herr Lehmann in a giant list. </p>
			<div>
				{words && words.map((word, i) => {
					return <Word key={word.question} word={word} />
				})}
			</div>
		</div>
	)
}

const wrapperHigherOrderComponents = compose(WordsContainer)
// export const StudyPageContainer = wrapperHigherOrderComponents(StudyPage)
export const WordsPageContainer = wrapperHigherOrderComponents(WordsPage)
// export default compose(WordsContainer)(WordsPage)