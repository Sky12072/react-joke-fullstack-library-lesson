import api from '../config/api'

const jokes = [
 {id: 1, body: "A good steak pun is a rare medium done well", category_id: 1, created_at: "2021-01-11T01:33:50.019Z", updated_at: "2021-01-11T01:33:50.019Z", user_id: 1},
 {id: 2, body: "I was wondering why the ball was getting bigger. Then it hit me", category_id: 1, created_at: "2021-01-11T01:33:50.026Z", updated_at: "2021-01-11T01:33:50.026Z", user_id: 1},
 {id: 3, body: "What’s the difference between a hippo and a zippo?…is really heavy and the other is a little lighter", category_id: 1, created_at: "2021-01-11T01:33:50.033Z", updated_at: "2021-01-11T01:33:50.033Z", user_id: 1},
 {id: 4, body: "I tried to sue the airline for losing my luggage. I lost my case", category_id: 1, created_at: "2021-01-11T01:33:50.039Z", updated_at: "2021-01-11T01:33:50.039Z", user_id: 1},
 {id: 5, body: "In order to understand recursion you must first understand recursion.", category_id: 2, created_at: "2021-01-11T01:33:50.046Z", updated_at: "2021-01-11T01:33:50.046Z", user_id: 1},
 {id: 6, body: "A programmer is heading out to the grocery store, …get a dozen. He returns with 13 gallons of milk.", category_id: 2, created_at: "2021-01-11T01:33:50.055Z", updated_at: "2021-01-11T01:33:50.055Z", user_id: 1},
 {id: 7, body: "Why do programmers give you a gift on Halloween? Because OCT 30 == DEC 25", category_id: 2, created_at: "2021-01-11T01:33:50.062Z", updated_at: "2021-01-11T01:33:50.062Z", user_id: 1}
]
export async function getJokes() {
	const jokes = await api.get('/api/jokes')
	return jokes.data
	// return Promise.resolve(jokes)
}

export async function getJoke(id) {
	const jokes = await api.get(`/api/jokes/${id}`)
	return jokes.data
	// const joke = jokes.find((joke) => joke.id === id)
	// return Promise.resolve(joke)
}

export async function getRandomJoke() {
	const joke = await api.get('/api/jokes/random')
	return joke.data
	/* const randomJoke = {
		body: "A good steak pun is a rare medium done well"
		category_id: 1
		created_at: "2021-01-11T01:33:50.019Z"
		id: 1
		updated_at: "2021-01-11T01:33:50.019Z"
		user_id: 1
	}
	*/
	//return Promise.resolve(randomJoke)
}

export async function createJoke(joke) {
	const newJoke = await api.post('/api/jokes',joke)
	return newJoke
	//return Promise.resolve(joke)
}

export async function deleteJoke(id) {
	return await api.delete(`/api/jokes/${id}`)
	//return Promise.resolve(id)
}

export async function updateJoke(joke) {
	const updatedJoke = await api.put(`/api/jokes/${joke.id}`,joke)
	return updatedJoke
	//return Promise.resolve(joke)
}