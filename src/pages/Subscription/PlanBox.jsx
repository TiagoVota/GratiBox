import styled from 'styled-components'



const PlanBox = ({ planInfo, onClick: handleClick }) => {
	const {
		type,
		image,
		pList,
	} = planInfo

	return (
		<Container>
			<img src={image} alt='Plan image' />

			<TextWrapper>
				{pList.map((pItem, idx) => <P key={idx}>{pItem}</P>)}
			</TextWrapper>

			<Button>
				{/* <Button onClick={() => handleClick(type)}> */}
				Assinar
			</Button>
		</Container>
	)
}


export default PlanBox


const Container = styled.div`
	height: 60vh;
	width: 94%;
	margin-bottom: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	background: #E5CDB3;

	img {
		width: 100%;
		border-radius: 30px;
	}
`

const TextWrapper = styled.div`
	height: 80px;
	width: 90%;
	margin: 3vh 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
`

const P = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	color: #4D65A8;
`

const Button = styled.button`
	width: 60%;
	height: 39px;
  margin: 3vh 0;
	background: #8C97EA;
	border-radius: 10px;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 42px;
	text-align: center;
	color: #FFFFFF;
`
