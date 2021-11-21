import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import UserContext from '../../contexts/UserContext'
import { errorModal } from '../../factories/modalFactory'
import { getPlanInfo } from '../../services/service.signature'

import signatureImg from '../../assets/signature.jpg'
import SignatureTextWrapper from './SignatureTextWrapper'


const hardCodedPlanInfo = {
	type: '@tipo_de_plano',
	startDate: 'dd/mm/aaaa',
	nextDeliveries: ['', '', ''].map(_ => 'dd/mm/aaaa'),
	productsTypes: ['', '', ''].map((_, i) => `produto ${i+1}`),
}

const SignatureBox = () => {
	const { userInfo: { token } } = useContext(UserContext)

	const [planInfo, setPlanInfo] = useState(hardCodedPlanInfo)

	const requestPlan = () => {
		if (token) {
			getPlanInfo(token)
				.then(({ data }) => setPlanInfo(data))
				.catch(({ request: { status }}) => handleFailRequest(status))
		}
	}

	const handleFailRequest = (status) => {
		const msgStatus = {
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	useEffect(requestPlan, [token])

	return (
		<Container>
			<img src={signatureImg} alt='Signature image' />

			<SignatureTextWrapper planInfo={planInfo} />

			<ProductsWrapper>
				{planInfo.productsTypes.map((product, idx) => <p key={idx}>{product}</p>)}
			</ProductsWrapper>
		</Container>
	)
}


export default SignatureBox


const Container = styled.div`
	height: 60%;
	width: 94%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 10px;
	background: #FFFFFF;

	img {
		width: 100%;
		border-radius: 25px;
	}
`

const ProductsWrapper = styled.div`
	width: 90%;
	margin: 0 auto 1vh;
	display: flex;
	justify-content: space-around;

	p {
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
		color: #E63C80;
	}
`