import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

import useGetMe from 'modules/user/hooks/useGetMe'

import { RootContainer } from './styled'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => {
	useGetMe()

	return <RootContainer>{renderRoutes(routes)}</RootContainer>
}

export default RootPage
