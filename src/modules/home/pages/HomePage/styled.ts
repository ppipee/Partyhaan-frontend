import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import { Gray, Primary } from 'common/styles/colors'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'
import { ScreenSize } from 'common/styles/constants'
import Gap from 'common/components/Gap'

const BUTTON_DESKTOP_SIZE = '80px'
const BUTTON_MOBILE_SIZE = '48px'

export const Container = styled(ContentContainer)`
	padding: ${Spaces[24]} ${Spaces[16]};
	position: relative;

	${media.mobile} {
		padding: 0 ${Spaces[12]} ${Spaces[24]};
	}
`

export const NavbarContent = styled(Gap)`
	width: 100%;
`

export const NavbarTitle = styled.div`
	margin: auto;
`

export const ButtonWrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	pointer-events: none;
	max-width: ${ScreenSize.Desktop}px;
`

export const CreatePartyButton = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 0 ${Spaces[24]} ${Spaces[24]} 0;
	pointer-events: auto;
	box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.12), 0px 0px 6px rgba(0, 0, 0, 0.12);

	background-color: ${Primary[500]};
	color: ${Gray.White};
	border-radius: 50%;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	height: ${BUTTON_DESKTOP_SIZE};
	width: ${BUTTON_DESKTOP_SIZE};

	svg {
		pointer-events: none;
	}

	${media.mobile} {
		height: ${BUTTON_MOBILE_SIZE};
		width: ${BUTTON_MOBILE_SIZE};
	}
`
