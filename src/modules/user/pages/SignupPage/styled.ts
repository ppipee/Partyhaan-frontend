import styled from 'styled-components'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { Gray, Primary } from 'common/styles/colors'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'

const CONTENT_WIDTH = '480px'

const LOGO_MOBILE_SIZE = '80px'
const LOGO_DESKTOP_SIZE = '140px'

const HEADER_HEIGHT = '180px'

export const ContainerWrapper = styled.div`
	background-color: ${Gray.White};
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
`

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${Primary[500]};
	min-height: 100%;
	height: max-content;
`

export const Container = styled(Gap)`
	background-color: ${Gray.White};
	max-width: ${CONTENT_WIDTH};
	padding: ${Spaces[36]} ${Spaces[24]} ${Spaces[48]};

	${media.mobile} {
		padding: ${Spaces[36]};
	}
`

export const SigninButton = styled(Button)`
	border-radius: 22px;
	width: 100%;
	font-weight: bold;
`

export const Logo = styled.img`
	height: ${LOGO_DESKTOP_SIZE};
	margin-top: ${Spaces[36]};

	${media.mobile} {
		height: ${LOGO_MOBILE_SIZE};
	}
`

export const Title = styled.span`
	color: ${Gray.White};
	font-weight: bold;
`

export const HeaderContainer = styled(Gap)`
	margin-bottom: ${Spaces[48]};
	max-height: ${HEADER_HEIGHT};

	${media.mobile} {
		margin-bottom: ${Spaces[36]};
	}
`
