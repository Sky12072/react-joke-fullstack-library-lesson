import React from 'react'
import {Line, COLOUR1, COLOUR2} from './Styled'

export default function Joke({joke,index}) {
	if (!joke) return null
	function isOdd(num) {
		return num % 2 === 1
	}
	return (
		// displaying a container with a colour and the contents is the joke.body
		<Line colour={isOdd(index) ? COLOUR1 : COLOUR2}>
			{joke.body}	
		</Line>
	)
}
