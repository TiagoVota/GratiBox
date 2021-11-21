import styled from 'styled-components'


const datesList = [
	'dd/mm/aaa',
	'dd/mm/aaa',
	'dd/mm/aaa',
]

const SignatureTextWrapper = ({ planInfo }) => {
	const {
		type,
		startDate,
		nextDeliveries,
	} = planInfo
	
	return (
		<Container>
			<p>Plano: <span>{type}</span></p>
			<p>Data da assinatura: <span>{startDate}</span></p>
			<p>Próximas entregas:</p>

			<NextDeliveryBox>
				{nextDeliveries.map((date, idx) => <span key={idx}>{date}</span>)}
			</NextDeliveryBox>
		</Container>
	)
}


export default SignatureTextWrapper


const Container = styled.div`
	width: 90%;
	margin: 0 auto;

	p {
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 21px;
		color: #4D65A8;
	}
	
	span {
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 21px;
		color: #E63C80;
	}
`

const NextDeliveryBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10vw;
`
