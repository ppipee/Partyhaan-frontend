import styled from 'styled-components'

import Button from 'common/components/Button'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import { Gray, Primary } from 'common/styles/colors'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'

const CONTENT_WIDTH = '680px'

const LOGO_MOBILE_SIZE = '120px'
const LOGO_DESKTOP_SIZE = '150px'

export const ContainerWrapper = styled(ContentContainer)`
	background-color: transparent;
	height: 100%;
	padding: ${Spaces[24]};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`

export const Background = styled.div`
	background-color: ${Primary[500]};
	height: max-content;
	min-height: 100%;
	display: flex;
`

export const Container = styled(Gap)`
	border-radius: 16px;
	background-color: ${Gray.White};
	max-width: ${CONTENT_WIDTH};
	padding: ${Spaces[24]};
	box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.12), 0px 0px 6px rgba(0, 0, 0, 0.12);
	margin: ${Spaces[24]} 0 ${Spaces[48]};

	${media.mobile} {
		margin-top: ${Spaces[16]};
		padding: ${Spaces[20]};
	}
`

export const SignupButton = styled(Button)`
	border-radius: 22px;
	width: 100%;
	font-weight: bold;
`

export const Logo = styled.img`
	border: 1px solid ${Primary[500]};
	height: ${LOGO_DESKTOP_SIZE};
	margin: 0 0 ${Spaces[36]};

	${media.mobile} {
		height: ${LOGO_MOBILE_SIZE};
	}
`
