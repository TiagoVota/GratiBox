import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import UserContext from './contexts/UserContext'
import ResetCss from './styles/ResetCss'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './Routes'


const App = () => {
	const [userInfo, setUserInfo] = useState({})
	const localStorageUserInfo = JSON.parse(localStorage.getItem('userInfo'))

	useEffect(() => {
		if (localStorageUserInfo) setUserInfo(localStorageUserInfo)
	}, [userInfo.token])

	return (
		<UserContext.Provider value={{userInfo, setUserInfo}}>
			<Router>
				<ResetCss />
				<GlobalStyle />

				<Routes />
			</Router>
		</UserContext.Provider>
	)
}


export default App
