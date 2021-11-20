import axios from 'axios'

import BASE_URL from './baseUrl'


const postSignUp = (body) => {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

const postLogin = (body) => {
	return axios.post(`${BASE_URL}/login`, body)
}


export {
	postSignUp,
	postLogin,
}
