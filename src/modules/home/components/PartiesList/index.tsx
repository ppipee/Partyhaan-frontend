import React, { ComponentType } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { isEmpty } from 'lodash'

import useResponsive from 'common/styles/hooks/useResponsive'

import useFetchParties from 'modules/home/hooks/useFetchParties'

import PartyCard from '../PartyCard'
import PartyListLoading from './loading'
import { DesktopContainer, MobileContainer } from './styled'

const PartiesList = () => {
	const { isDesktop } = useResponsive()
	const { isLoading, parties, loadMore, hasMore } = useFetchParties()

	const Container = (isDesktop ? DesktopContainer : MobileContainer) as ComponentType

	if (isLoading) return <PartyListLoading cardNumber={6} />
	if (isEmpty(parties)) return <div>empty</div>

	return (
		<InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
			<Container>
				{parties.map((party) => (
					<PartyCard key={`party-${party.id}`} party={party} />
				))}
			</Container>
		</InfiniteScroll>
	)
}

export default PartiesList
