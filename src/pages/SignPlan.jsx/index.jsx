import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UserContext from '../../contexts/UserContext'
import firstName from '../../utils/firstName'

import PlanBox from './PlanBox'


const SignPlan = () => {
	const { userInfo } = useContext(UserContext)
	const history = useHistory()
	const { name } = userInfo

	const displayName = firstName(name) || '@User'

	const redirect = path => history.push(path)
	const handleClick = () => {
		redirect('/sign-plan')
	}

	return (
		<Container>
			<TextWrapper>
				<h1>Bom te ver por aqui, {displayName}.</h1>
				<h2>“Agradecer é arte de atrair coisas boas”</h2>
			</TextWrapper>

			<PlanBox />

			<Button onClick={() => handleClick()}>
				Próximo
			</Button>
		</Container>
	)
}


export default SignPlan


const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const TextWrapper = styled.div`
	height: 25vh;

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

const Button = styled.button`
	width: 60%;
	height: 39px;
  margin: calc((9vh - 39px) / 2) 0;
	background: #8C97EA;
	border-radius: 10px;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #FFFFFF;
`
