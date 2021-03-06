import SignInPage from '../pages/SigninPage'
import SignUpPage from '../pages/SignupPage'
import { SIGNIN_PATH, SIGNUP_PATH } from './path'

const userRoutes = [
	{
		path: SIGNIN_PATH,
		exact: true,
		component: SignInPage,
	},
	{
		path: SIGNUP_PATH,
		exact: true,
		component: SignUpPage,
	},
]

export default userRoutes
