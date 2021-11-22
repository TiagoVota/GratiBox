import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UserContext from '../../contexts/UserContext'
import theValidationProceeded from '../../validations/handleValidation'
import validateLogin from '../../validations/validate.login'
import { errorModal, successModal } from '../../factories/modalFactory'
import { postLogin } from '../../services/service.auth'


const Login = () => {
	const { setUserInfo } = useContext(UserContext)
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			email: email?.toLowerCase(),
			password
		}

		const isValidInputs = theValidationProceeded(body, validateLogin)
		if (!isValidInputs) return

		postLogin(body)
			.then(({ data: userInfo }) => {
				successModal('Login realizado!')
				clearInputs()

				setUserInfo(userInfo)
				localStorage.setItem('userInfo', JSON.stringify(userInfo))

				if (userInfo.isSubscriber) return redirect('/my-signature')
				redirect('/subscription')

			}).catch(({ request: { status }}) => handleFailRegister(status))
	}

	const clearInputs = () => {
		setEmail('')
		setPassword('')
	}

	const redirect = path => history.push(path)

	const handleFailRegister = (status) => {
		const msgStatus = {
			422: 'Campo(s) inválido(s)!',
			401: 'E-mail e/ou senha incorretos(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}
  

	return (
		<Container>

			<H1>Bem-vindo ao GratiBox</H1>

			<form onSubmit={handleSubmit}>
				<Label htmlFor='E-mail'>E-mail:</Label>
				<Input
					id='E-mail'
					placeholder='Ex: meulindoemail@email.com'
					type='email'
					onChange={({ target: { value }}) => setEmail(value)}
					value={email}
					required
				/>

				<Label htmlFor='Senha'>Senha:</Label>
				<Input
					id='Senha'
					placeholder='Ex: Senha!123'
					type='password'
					onChange={({ target: { value }}) => setPassword(value)}
					value={password}
					required
				/>

				<Button type='submit'>
					Login
				</Button>
			</form>

			<Link to='/sign-up'>
				<P>Ainda não sou grato</P>
			</Link>

		</Container>
	)
}


export default Login


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const H1 = styled.h1`
	margin-bottom: 10%;
  font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 33px;
	text-align: center;
	color: #FFFFFF;
`

const Label = styled.label`
  margin-left: 5%;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	color: #FFFFFF;
`

const Input = styled.input`
	width: 90%;
	height: 64px;
	margin-left: 5%;
	margin-bottom: 5px;
	font-size: 24px;
	line-height: 28px;
	border-radius: 10px;
	border: 1px solid #604848;
	background: #FFFFFF;
	padding-left: 13px;

	::placeholder {
		font-size: 22px;
		color: #575757;
	}

	:focus {
		color: #4D65A8;
		outline: none;
	}
`

const Button = styled.button`
	width: 60%;
	height: 56px;
  margin: 25vh 0 20px 20%;
	background: #8C97EA;
	border-radius: 10px;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 42px;
	text-align: center;
	color: #FFFFFF;
`

const P = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	color: #FFFFFF;
`
