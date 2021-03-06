import useSwitch from 'common/hooks/useSwitch'
import CreatePartyModal from 'modules/home/components/CreatePartyModal'
import PartiesList from 'modules/home/components/PartiesList'
import useHomeStore from 'modules/home/hooks/useHomeStore'
import NavigationBar from 'modules/root/components/NavigationBar'
import React from 'react'
import { Container, NavbarContent } from './styled'

const HomePageComponent = () => {
	const { isOpen, open, close } = useSwitch()

	return (
		<>
			<NavigationBar>
				<NavbarContent>ปาร์ตี้ทั้งหมด</NavbarContent>
			</NavigationBar>
			<Container className="margin-top-16">
				<PartiesList />
			</Container>
			{isOpen && <CreatePartyModal close={close} />}
		</>
	)
}

export default HomePageComponent
