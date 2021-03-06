import React from 'react'

import ArrowIcon from 'common/components/icons/ArrowIcon'
import useResponsive from 'common/styles/hooks/useResponsive'

import CreatePartyForm from 'modules/home/components/CreatePartyForm'
import NavigationBar from 'modules/root/components/NavigationBar'

import { IconWrapper } from './styled'
import Modal from 'common/components/Modal'

type Props = {
	close: () => void
}

const ICON_SIZE = 28

const CreatePartyModalComponent = ({ close }: Props) => {
	const { isDesktop } = useResponsive()

	return (
		<div>
			{!isDesktop && (
				<NavigationBar>
					<IconWrapper onClick={close}>
						<ArrowIcon size={ICON_SIZE} />
					</IconWrapper>
				</NavigationBar>
			)}
			<Modal close={close}>
				<CreatePartyForm onClose={close} />
			</Modal>
		</div>
	)
}

export default CreatePartyModalComponent
