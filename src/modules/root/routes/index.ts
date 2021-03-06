import RootPage from '../pages/RootPage'
import HomeRoute from 'modules/home/routes'
import UserRoutes from 'modules/user/routes'

const rootRoute = {
	path: '/',
	component: RootPage,
	routes: [HomeRoute, ...UserRoutes],
}

export default [rootRoute]
