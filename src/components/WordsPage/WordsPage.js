import React from 'react'
import Lehmann from '../../data/herr_lehmann.json'
import Word from '../Word/Word'

const  WordsPage = (props) => {

	const words = props.words.slice(0,100)

	return (
		<div>
			{words.map((word, i) => {
				return <Word key={word.word} word={word} />
			})}
		</div>
	)
}

export default WordsPage