import styled from 'styled-components'

import { Gray, Primary } from 'common/styles/colors'
import { NAV_HEIGHT } from 'common/styles/constants'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'

const MODAL_WIDTH = '480px'

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 200;

	& > div {
		position: absolute;
	}
	${media.mobile} {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
`

export const ModalContainer = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: ${MODAL_WIDTH};
	border-radius: 16px;
	background-color: ${Gray.White};
	padding: ${Spaces[24]} ${Spaces[32]};

	${media.mobile} {
		width: 100%;
		transform: none;
		top: ${NAV_HEIGHT};
		left: 0;
		bottom: 0;
		border-radius: 0;
		padding: ${Spaces[12]} ${Spaces[24]} ${Spaces[16]};
	}
`

export const Overlay = styled.div`
	background: rgba(0, 0, 0, 0.4);
	height: 100%;
	width: 100%;
`

export const IconWrapper = styled.div`
	position: absolute;
	border-radius: 50%;
	background-color: ${Primary[500]};
	top: 0;
	right: 0;
	transform: translate(30%, -30%);
	padding: ${Spaces[2]};

	svg {
		display: block;
	}
`
