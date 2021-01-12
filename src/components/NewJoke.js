import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createJoke, getJoke, updateJoke} from '../services/jokeServices'
import {categories} from '../utils/categories'
import {useGlobalState} from '../utils/stateContext'

export default function NewJoke() {
	const initialFormState = {
		category_id: 1,
		body: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()

	useEffect(() => {
		if(id) {
			getJoke(id)
			.then((joke) => {
				const category = categories.find((category) => category.name.toLowerCase() === joke.category.toLowerCase())
				setFormState({
					category_id: category.id,
					body: joke.body
				})
			})
		}
	},[id])

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateJoke( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateJoke', data: {id: id, ...formState}})
				history.push(`/jokes/${id}`)
			})
		}
		else {
			createJoke({joke: formState})
			.then((joke) => {
				dispatch({type: 'addJoke', data: joke.data})
				history.push(`/jokes/${joke.data.id}`)
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>
			<Label>Category:</Label>
			<select name='category_id' value={formState.category_id} onChange={handleChange}>
				{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
			</select>
			<Label>Joke:</Label>
			<BigTextInput type='text' name='body' value={formState.body} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
