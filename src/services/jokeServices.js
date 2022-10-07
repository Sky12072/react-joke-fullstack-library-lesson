import {categories} from '../utils/categories'
import jokeAPI from '../config/api';

// this is the joke database
const jokes = [
 {id: 1, body: "A good steak pun is a rare medium done well", category_id: 1, created_at: "2021-01-11T01:33:50.019Z", updated_at: "2021-01-11T01:33:50.019Z", user_id: 1},
 {id: 2, body: "I was wondering why the ball was getting bigger. Then it hit me", category_id: 1, created_at: "2021-01-11T01:33:50.026Z", updated_at: "2021-01-11T01:33:50.026Z", user_id: 1},
 {id: 3, body: "What’s the difference between a hippo and a zippo?…is really heavy and the other is a little lighter", category_id: 1, created_at: "2021-01-11T01:33:50.033Z", updated_at: "2021-01-11T01:33:50.033Z", user_id: 1},
 {id: 4, body: "I tried to sue the airline for losing my luggage. I lost my case", category_id: 1, created_at: "2021-01-11T01:33:50.039Z", updated_at: "2021-01-11T01:33:50.039Z", user_id: 1},
 {id: 5, body: "In order to understand recursion you must first understand recursion.", category_id: 2, created_at: "2021-01-11T01:33:50.046Z", updated_at: "2021-01-11T01:33:50.046Z", user_id: 1},
 {id: 6, body: "A programmer is heading out to the grocery store, …get a dozen. He returns with 13 gallons of milk.", category_id: 2, created_at: "2021-01-11T01:33:50.055Z", updated_at: "2021-01-11T01:33:50.055Z", user_id: 1},
 {id: 7, body: "Why do programmers give you a gift on Halloween? Because OCT 30 == DEC 25", category_id: 2, created_at: "2021-01-11T01:33:50.062Z", updated_at: "2021-01-11T01:33:50.062Z", user_id: 1}
]

// this function is returning objects especially containing the correct category name
function transformJoke(joke) {
	const category = categories.find(category => category.id === joke.category_id)
	return {
		author: "Test",
		category: category.name, 
		posted: joke.created_at,
		body: joke.body
	}

}

// this function is for exporting the jokes database
export async function getJokes() {
	const response = await jokeAPI.get('/api/jokes')
	console.log (response)
	return response.data
	// return Promise.resolve(jokes)
}

// this function is for getting joke based on the id number
export async function getJoke(id) {
	const response = await jokeAPI.get(`/api/jokes/${id}`)
	return response.data
}

// this function is for just returning the randomjoke's object content
export async function getRandomJoke() {

	const response = await jokeAPI.get('/api/jokes/random')
	return response.data
}

export async function createJoke(joke) {
	const response = await jokeAPI.post('api/jokes', joke)
	console.log (response)
	return response.data
}

export async function deleteJoke(id) {
	const response = await jokeAPI.delete(`/api/jokes/${id}`);
	return response.data
}

export async function updateJoke(data) {
	const response = await jokeAPI.put(`/api/jokes/${data.id}`, {body: data.body, category_id: data.category_id});
	return response.data
	
}