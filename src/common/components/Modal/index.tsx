import React, { ReactNode } from 'react'
import { IconWrapper, ModalContainer, ModalWrapper, Overlay } from './styled'
import CloseIcon from 'common/components/icons/CloseIcon'
import { Gray } from 'common/styles/colors'

type Props = {
	closeWithOverlay?: boolean
	children: ReactNode
	close: () => void
	hideCloseIcon?: boolean
}

const ICON_SIZE = 24

const Modal = ({ close, closeWithOverlay, children, hideCloseIcon }: Props) => {
	return (
		<ModalWrapper>
			<Overlay onClick={closeWithOverlay && close} />
			<ModalContainer>
				{hideCloseIcon && (
					<IconWrapper>
						<CloseIcon onClick={close} cursor="pointer" color={Gray.White} size={ICON_SIZE} />
					</IconWrapper>
				)}
				{children}
			</ModalContainer>
		</ModalWrapper>
	)
}

export default Modal
