import React from 'react'

import ArrowIcon from 'common/components/icons/ArrowIcon'
import Modal from 'common/components/Modal'
import useResponsive from 'common/styles/hooks/useResponsive'

import CreatePartyForm from 'modules/home/components/CreatePartyForm'
import NavigationBar from 'modules/root/components/NavigationBar'

import { IconWrapper } from './styled'

type Props = {
	close: () => void
}

const ARROW_ICON_SIZE = 28

const CreatePartyModalComponent = ({ close }: Props) => {
	const { isDesktop } = useResponsive()

	return (
		<div>
			{!isDesktop && (
				<NavigationBar zIndex={201}>
					<IconWrapper onClick={close}>
						<ArrowIcon size={ARROW_ICON_SIZE} />
					</IconWrapper>
				</NavigationBar>
			)}
			<Modal close={close} hideCloseIcon={!isDesktop}>
				<CreatePartyForm onClose={close} />
			</Modal>
		</div>
	)
}

export default CreatePartyModalComponent
