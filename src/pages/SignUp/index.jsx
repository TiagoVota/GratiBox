import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import theValidationProceeded from '../../validations/handleValidation'
import validateSignUp from '../../validations/validate.signUp'
import { errorModal, successModal } from '../../factories/modalFactory'
import { postSignUp } from '../../services/service.auth'


const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const history = useHistory()


	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			name,
			email: email?.toLowerCase(),
			password,
			repeatPassword,
		}

		const isValidInputs = theValidationProceeded(body, validateSignUp)
		if (!isValidInputs) return

		postSignUp(body)
			.then(() => {
				successModal('Cadastro realizado!')
				history.push('/login')
				clearInputs()
			})
			.catch(({ request: { status }}) => handleFailRegister(status))
	}

	const clearInputs = () => {
		setName('')
		setEmail('')
		setPassword('')
		setRepeatPassword('')
	}

	const handleFailRegister = (status) => {
		const msgStatus = {
			422: 'Campo(s) inválido(s)!',
			409: 'E-mail já cadastrado!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com nosso servidor 🥺'

		errorModal(msgToSend)
	}
  

	return (
		<Container>

			<H1>Bem-vindo ao GratiBox</H1>

			<form onSubmit={handleSubmit}>
				<Label htmlFor='Nome'>Nome:</Label>
				<Input
					id='Nome'
					placeholder='Ex: Meu Lindo Nome'
					type='text'
					onChange={({ target: { value }}) => setName(value)}
					value={name}
					required
				/>

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
					type='text'
					onChange={({ target: { value }}) => setPassword(value)}
					value={password}
					required
				/>

				<Label htmlFor='Confirme a senha'>Confirme a senha:</Label>
				<Input
					id='Confirme a senha'
					placeholder='Ex: Senha!123'
					type='text'
					onChange={({ target: { value }}) => setRepeatPassword(value)}
					value={repeatPassword}
					required
				/>

				<Button type='submit'>
					Cadastrar
				</Button>
			</form>

			<Link to='/login'>
				<P>Já sou grato</P>
			</Link>

		</Container>
	)
}


export default SignUp


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
  margin: 15px 0 20px 20%;
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
