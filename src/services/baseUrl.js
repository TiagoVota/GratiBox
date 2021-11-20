/*
  TODO: Olá Galdino, alguma ideia melhor de onde colocar a informação desse
  arquivo?
  Ele não é bem um service, estaria mais para um setup. Mas não sei se é usual
  criar alguma pasta chamada setup ou algo desse gênero
*/
const { NODE_ENV } = process.env

const BASE_URL = (NODE_ENV === 'production')
	? 'https://grati-box-tvc.herokuapp.com'
	: 'http://localhost:4242'


export default BASE_URL
