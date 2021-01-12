import api from '../config/api'

export async function signUp(data) {
	// sign up(register) on server
	return Promise.resolve(data)
}
export async function signIn(data) {
	// sign in on server
	const user = await api.post('/api/auth/sign_in',data)
	return user.data
	//return Promise.resolve(data.username)
}
export async function signOut(data) {
	// sign in on server
	return Promise.resolve(data.username)
}