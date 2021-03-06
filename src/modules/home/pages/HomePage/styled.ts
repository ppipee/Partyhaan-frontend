import ContentContainer from 'common/components/ContentContainer'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'

const BUTTON_MOBILE_SIZE = '40px'
const BUTTON_DESKTOP_SIZE = '50px'

export const Container = styled(ContentContainer)`
	padding: ${Spaces[24]} ${Spaces[16]};
	position: relative;

	${media.mobile} {
		padding: ${Spaces[16]} ${Spaces[12]};
	}
`

export const NavbarContent = styled.span`
	margin: auto;
`

export const CreatePartyButton = styled.div`
	position: absolute;
	bottom: ${Spaces[24]};
	right: ${Spaces[24]};
	height: ${BUTTON_DESKTOP_SIZE};

	${media.mobile} {
		height: ${BUTTON_MOBILE_SIZE};
		bottom: ${Spaces[16]};
		right: ${Spaces[16]};
	}
`
