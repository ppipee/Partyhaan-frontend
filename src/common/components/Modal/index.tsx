import React, { HTMLAttributes, ReactNode } from 'react'

import CloseIcon from 'common/components/icons/CloseIcon'
import { Gray } from 'common/styles/colors'

import { IconWrapper, ModalContainer, ModalWrapper, Overlay } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	closeWithOverlay?: boolean
	children: ReactNode
	close: () => void
	hideCloseIcon?: boolean
}

const ICON_SIZE = 24

const Modal = ({ close, closeWithOverlay, children, hideCloseIcon, ...props }: Props) => {
	return (
		<ModalWrapper>
			<Overlay onClick={closeWithOverlay && close} />
			<ModalContainer {...props}>
				{!hideCloseIcon && (
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
