import React, { ComponentType } from 'react'

import { range } from 'lodash'

import useResponsive from 'common/styles/hooks/useResponsive'

import PartyCardLoading from '../PartyCard/loading'
import { DesktopContainer, MobileContainer } from './styled'

type Props = {
	cardNumber?: number
}

const PartyListLoading = ({ cardNumber = 4 }: Props) => {
	const { isDesktop } = useResponsive()

	const Container = (isDesktop ? DesktopContainer : MobileContainer) as ComponentType

	return (
		<Container>
			{range(cardNumber).map((index) => (
				<PartyCardLoading key={`party-card-loading-${index}`} />
			))}
		</Container>
	)
}

export default PartyListLoading
