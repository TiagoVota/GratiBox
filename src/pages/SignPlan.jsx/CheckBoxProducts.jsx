import { ArrowDownOutline } from 'react-ionicons'
import styled from 'styled-components'


const CheckBoxProducts = ({ onClick: handleToggleBox , openState }) => {
	const heightMultiplier = openState ? '0.5' : '0.25'

	const handleHeaderClick = () => handleToggleBox(2)

	return (
		<Container multiplier={heightMultiplier}>
			<BoxHeader onClick={handleHeaderClick}>
				<p>Quero Receber</p>
				
				<ArrowDownOutline
					color={'#4D65A8'} 
					title={'Drop Down Box Arrow'}
					height="25px"
					width="25px"
				/>
			</BoxHeader>

			<InputBox isOpen={openState}>
				<InputWrapper>
					<input
						id='tea'
						type='checkbox'
					/>
					<Label htmlFor='tea'>Chás</Label>
				</InputWrapper>

				<InputWrapper>
					<input
						id='incenses'
						type='checkbox'
					/>
					<Label htmlFor='incenses'>Incensos</Label>
				</InputWrapper>

				<InputWrapper>
					<input
						id='organics-products'
						type='checkbox'
					/>
					<Label htmlFor='organics-products'>Produtos orgânicos</Label>
				</InputWrapper>
			</InputBox>
		</Container>
	)
}


export default CheckBoxProducts



const Container = styled.div`
	height: calc((100% - 50px) * ${p => p.multiplier});
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	color: #4D65A8;
	background: rgba(224, 209, 237, 0.62);
	border-radius: 5px;
`

const BoxHeader = styled.div`
	width: 90%;
	margin-top: 5%;
	display: flex;
	justify-content: space-between;
`

const InputBox = styled.div`
	width: 90%;
	margin-top: 5%;
	display: ${p => p.isOpen ? 'flex' : 'none'};
	flex-wrap: wrap;
	justify-content: space-between;
`

const InputWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`

const Label = styled.label`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: #4D65A8;
`
