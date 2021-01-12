import {categories} from '../utils/categories'

const jokes = [
 {id: 1, body: "A good steak pun is a rare medium done well", category_id: 1, created_at: "2021-01-11T01:33:50.019Z", updated_at: "2021-01-11T01:33:50.019Z", user_id: 1},
 {id: 2, body: "I was wondering why the ball was getting bigger. Then it hit me", category_id: 1, created_at: "2021-01-11T01:33:50.026Z", updated_at: "2021-01-11T01:33:50.026Z", user_id: 1},
 {id: 3, body: "What’s the difference between a hippo and a zippo?…is really heavy and the other is a little lighter", category_id: 1, created_at: "2021-01-11T01:33:50.033Z", updated_at: "2021-01-11T01:33:50.033Z", user_id: 1},
 {id: 4, body: "I tried to sue the airline for losing my luggage. I lost my case", category_id: 1, created_at: "2021-01-11T01:33:50.039Z", updated_at: "2021-01-11T01:33:50.039Z", user_id: 1},
 {id: 5, body: "In order to understand recursion you must first understand recursion.", category_id: 2, created_at: "2021-01-11T01:33:50.046Z", updated_at: "2021-01-11T01:33:50.046Z", user_id: 1},
 {id: 6, body: "A programmer is heading out to the grocery store, …get a dozen. He returns with 13 gallons of milk.", category_id: 2, created_at: "2021-01-11T01:33:50.055Z", updated_at: "2021-01-11T01:33:50.055Z", user_id: 1},
 {id: 7, body: "Why do programmers give you a gift on Halloween? Because OCT 30 == DEC 25", category_id: 2, created_at: "2021-01-11T01:33:50.062Z", updated_at: "2021-01-11T01:33:50.062Z", user_id: 1}
]


function transformJoke(joke) {
	const category = categories.find(category => category.id === joke.category_id)
	return {
		author: "Test",
		category: category.name, 
		posted: joke.created_at,
		body: joke.body
	}

}

export async function getJokes() {
	return jokes
	// return Promise.resolve(jokes)
}


export async function getJoke(id) {
	const joke = jokes.find(joke => joke.id == id)
	return joke ? transformJoke(joke) : null
}

export async function getRandomJoke() {

	const randomJoke = {
		body: "A good steak pun is a rare medium done well",
		category_id: 1,
		created_at: "2021-01-11T01:33:50.019Z",
		id: 1,
		updated_at: "2021-01-11T01:33:50.019Z",
		user_id: 1,
	}
	
	return randomJoke
}

export async function createJoke(joke) {
	return joke
}

export async function deleteJoke(id) {
	console.log("ran")
	return id
}

export async function updateJoke(joke) {
	return joke
	
}