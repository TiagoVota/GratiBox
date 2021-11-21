import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UserContext from '../../contexts/UserContext'
import firstName from '../../utils/firstName'
import { errorModal } from '../../factories/modalFactory'
import { getPlanInfo } from '../../services/service.signature'

import SignatureBox from './SignatureBox'


const hardCodedPlanInfo = {
	type: '@tipo_de_plano',
	startDate: 'dd/mm/aaaa',
	nextDeliveries: [...'123'].map(_ => 'dd/mm/aaaa'),
	productsTypes: [...'123'].map((e) => `produto ${e}`),
}

const MySignature = () => {
	const { userInfo: { name, token } } = useContext(UserContext)
	const [planInfo, setPlanInfo] = useState(hardCodedPlanInfo)
	const history = useHistory()

	const requestPlan = () => {
		if (token) {
			getPlanInfo(token)
				.then(({ data }) => setPlanInfo(data))
				.catch(({ request: { status }}) => handleFailRequest(status))
		}
	}

	const handleFailRequest = (status) => {
		const msgStatus = {
			404: 'Assinatura não encontrada!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const handleClick = () => history.push('/rating')

	const displayName = firstName(name) || '@User'

	useEffect(requestPlan, [token])

	return (
		<Container>
			<TextWrapper>
				<h1>Bom te ver por aqui, {displayName}.</h1>
				<h2>“Agradecer é arte de atrair coisas boas”</h2>
			</TextWrapper>

			<SignatureBox planInfo={planInfo} />

			<Button onClick={handleClick}>Avaliar entregas</Button>

		</Container>
	)
}


export default MySignature


const Container = styled.div`
position: relative;

	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const TextWrapper = styled.div`
	height: 25%;

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
	height: 56px;
  margin: 20px 0 calc(15vh - 56px - 20px);
	background: #8C97EA;
	border-radius: 10px;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 42px;
	text-align: center;
	color: #FFFFFF;
`
