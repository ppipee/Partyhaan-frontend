import React from 'react'

import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import rootRoutes from 'modules/root/routes'
import { BaseGlobalStyles, MixinsGlobalStyles } from 'common/styles/globalStyles'

const App = () => (
	<RecoilRoot>
		<BaseGlobalStyles />
		<MixinsGlobalStyles />
		<BrowserRouter>{renderRoutes(rootRoutes)}</BrowserRouter>
	</RecoilRoot>
)
export default App
