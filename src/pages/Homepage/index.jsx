import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import homepageImg from '../../assets/homepage.webp'


const Homepage = () => {
	const history = useHistory()

	const redirect = path => history.push(path)
	const handleSignUpClick = () => redirect('/sign-up')
	const handleLoginClick = () => redirect('/login')

	return (
		<Container>
			<TextWrapper>
				<h1>Bem vindo ao GratiBox</h1>
				<h2>
					Receba em casa um box com chás, produtos organicos, incensos e muito 
					mais...
				</h2>
			</TextWrapper>

			<img src={homepageImg} alt='Homepage image' />

			<ButtonsWrapper>
				<Button onClick={handleSignUpClick}>
					Quero começar
				</Button>

				<Button onClick={handleLoginClick} isLogin >
					Já sou grato
				</Button>

			</ButtonsWrapper>
		</Container>
	)
}


export default Homepage


const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: start;

	img {
		width: 100vw;
	}
`

const TextWrapper = styled.div`
	height: 25%;
	z-index: 1;

	h1 {
		margin: 55px 0 45px;
		font-style: normal;
		font-weight: 500;
		font-size: 28px;
		line-height: 33px;
		text-align: center;
		color: #FFFFFF;
	}

	h2 {
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		color: #FFFFFF;
	}
`

const ButtonsWrapper = styled.div`
	height: calc(100% - 25% - 100vw + 50px);
	margin-top: -50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 1;
	background-color: #4D65A8;

`

const Button = styled.button`
	height: 45px;
	width: 50%;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	color: #FFFFFF;
	border-radius: 10px;
	border-width: 0px;
	background-color: ${props => props.isLogin ? '#4D65A8' : '#8C97EA'};
`