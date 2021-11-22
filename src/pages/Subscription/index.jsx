import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UserContext from '../../contexts/UserContext'
import firstName from '../../utils/firstName'

import planWeeklyImg from '../../assets/plan-weekly.jpg'
import planMonthlyImg from '../../assets/plan-monthly.jpg'
import PlanBox from './PlanBox'


const Subscription = () => {
	const { userInfo, setUserInfo } = useContext(UserContext)
	const history = useHistory()
	const { name } = userInfo

	const displayName = firstName(name) || '@User'
	
	const plansInfo = [
		{
			type: 'semanal',
			image: planWeeklyImg,
			pList: [
				'Você recebe um box por semana.',
				'Ideal para quem quer exercer a gratidão todos os dias.'
			]
		},
		{
			type: 'mensal',
			image: planMonthlyImg,
			pList: [
				'Você recebe um box por mês.',
				'Ideal para quem está começando agora.'
			]
		},
	]

	const redirect = path => history.push(path)
	const handleClick = (type) => {
		const newUserInfo = {
			...userInfo,
			planType : type
		}
	
		setUserInfo(newUserInfo)
		localStorage.setItem('userInfo', JSON.stringify(newUserInfo))

		redirect('/sign-plan-1')
	}

	return (
		<Container>
			<TextWrapper>
				<h1>Bom te ver por aqui, {displayName}.</h1>
				<h2>Você ainda não assinou um plano,<br/>que tal começar agora?</h2>
			</TextWrapper>

			<PlansWrapper>
				{plansInfo.map((planInfo, index) => {
					return <PlanBox
						key={index}
						planInfo={planInfo}
						onClick={handleClick}
					/>
				})}
			</PlansWrapper>
		</Container>
	)
}


export default Subscription


const Container = styled.div`
	height: 160vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const TextWrapper = styled.div`
	height: 30vh;

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

const PlansWrapper = styled.div`
	height: 130vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`
