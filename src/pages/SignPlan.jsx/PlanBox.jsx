import { useState } from 'react'
import styled from 'styled-components'

import signatureImg from '../../assets/signature.jpg'
import CheckBoxPlan from './CheckBoxPlan'
import CheckBoxFrequency from './CheckBoxFrequency'
import CheckBoxProducts from './CheckBoxProducts'


const PlanBox = () => {
	const [isOpenBoxes, setIsOpenBoxes] = useState([false, true, false])

	const handleToggleBox = (index) => {
		const newStates = [false, false, false]
		newStates[index] = true

		setIsOpenBoxes(newStates)
	}


	return (
		<Container>
			<img src={signatureImg} alt='Signature image' />
			
			<CheckBoxContainer>
				<CheckBoxPlan
					onClick={handleToggleBox}
					openState={isOpenBoxes[0]}
				/>

				<CheckBoxFrequency
					onClick={handleToggleBox}
					openState={isOpenBoxes[1]}
				/>

				<CheckBoxProducts
					onClick={handleToggleBox}
					openState={isOpenBoxes[2]}
				/>


			</CheckBoxContainer>

		</Container>
	)
}


export default PlanBox


const Container = styled.div`
	height: 66vh;
	width: 94%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	background: #FFFFFF;

	img {
		width: 100%;
		border-radius: 30px;
	}
`

const CheckBoxContainer = styled.div`
	height: 50%;
	width: 85%;
	margin-bottom: 2vh;
`
