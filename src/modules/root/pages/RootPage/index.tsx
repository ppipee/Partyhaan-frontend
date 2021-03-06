import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { RootContainer } from './styled'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<RootContainer>{renderRoutes(routes)}</RootContainer>
)

export default RootPage
