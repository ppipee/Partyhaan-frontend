import useResponsive from 'common/styles/hooks/useResponsive'
import React, { ComponentType } from 'react'
import PartyCard from '../PartyCard'
import { DesktopContainer, MobileContainer } from './styled'

const MOCK_PARTY = {
	id: '1',
	name: 'long longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
	totalMembers: 0,
	maxMembers: 10,
}

const PartiesList = () => {
	const { isDesktop } = useResponsive()
	const Container = (isDesktop ? DesktopContainer : MobileContainer) as ComponentType
	const parties = [
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
		MOCK_PARTY,
	]

	return (
		<Container>
			{parties.map((party) => (
				<PartyCard key={`party-${party.id}`} party={party} />
			))}
		</Container>
	)
}

export default PartiesList
