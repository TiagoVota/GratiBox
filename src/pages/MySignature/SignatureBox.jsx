import styled from 'styled-components'

import signatureImg from '../../assets/signature.jpg'
import SignatureTextWrapper from './SignatureTextWrapper'


const SignatureBox = ({ planInfo }) => {
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
