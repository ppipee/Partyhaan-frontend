import React, { useEffect } from 'react'

import AddIcon from 'common/components/icons/AddIcon'
import useSwitch from 'common/hooks/useSwitch'
import useResponsive from 'common/styles/hooks/useResponsive'

import CreatePartyModal from 'modules/home/components/CreatePartyModal'
import NavigationBar from 'modules/home/components/NavigationBar'
import PartiesList from 'modules/home/components/PartiesList'

import { ButtonWrapper, Container, CreatePartyButton, NavbarContent, NavbarTitle } from './styled'

const ADD_ICON_SIZE = {
	MOBILE: 20,
	DESKTOP: 36,
}

const HomePageComponent = () => {
	const { isOpen, open, close } = useSwitch()
	const { isDesktop } = useResponsive()

	useEffect(() => {
		return () => {
			close()
		}
	}, [])

	return (
		<>
			<NavigationBar />
			<Container className="margin-top-16">
				<PartiesList />
			</Container>
			<ButtonWrapper>
				<CreatePartyButton onClick={open}>
					<AddIcon size={isDesktop ? ADD_ICON_SIZE.DESKTOP : ADD_ICON_SIZE.MOBILE} />
				</CreatePartyButton>
			</ButtonWrapper>
			{isOpen && <CreatePartyModal close={close} />}
		</>
	)
}

export default HomePageComponent
