import { useContext, useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'

import UserContext from './contexts/UserContext'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Subscription from './pages/Subscription'
import SignPlan from './pages/SignPlan.jsx'
import MySignature from './pages/MySignature'


const Routes = () => {
	const { userInfo: { token } } = useContext(UserContext)
	const location = useLocation()
	const history = useHistory()


	const protectPrivatePages = () => {
		// TODO: LocalStorage have a delay to getItem, fix this later!
		const { pathname } = location
		
		const isPrivate = !['/', '/login', '/sign-up'].includes(pathname)
		const haveLogin = Boolean(token)

		if (isPrivate && !haveLogin) return history.push('/')
		if (haveLogin && !isPrivate) return history.push('/my-signature')
	}


	// TODO: Habilitar essa função quando souber lidar com o delay do localStorage
	// useEffect(protectPrivatePages, [token])

	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/subscription" component={Subscription} />
			<Route exact path="/sign-plan" component={SignPlan} />
			<Route exact path="/my-signature" component={MySignature} />
		</Switch>
	)
}


export default Routes
