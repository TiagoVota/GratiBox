import axios from 'axios'

import BASE_URL from './baseUrl'
import makeConfig from './makeConfig'


const getPlanInfo = (token) => {
	return axios.get(`${BASE_URL}/my-signature`, makeConfig(token))
}


export {
	getPlanInfo,
}