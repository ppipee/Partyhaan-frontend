import ContentContainer from 'common/components/ContentContainer'
import { Primary, Gray } from 'common/styles/colors'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'
import media from 'common/styles/media'
import Button from 'common/components/Button'
import Gap from 'common/components/Gap'

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
`

export const Background = styled.div`
	background-color: ${Primary[500]};
	height: max-content;
	min-height: 100%;
`

export const Container = styled(Gap)`
	border-radius: 16px;
	background-color: ${Gray.White};
	max-width: ${CONTENT_WIDTH};
	padding: ${Spaces[24]};
	box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.12), 0px 0px 6px rgba(0, 0, 0, 0.12);

	${media.mobile} {
		padding: ${Spaces[16]};
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
	margin: ${Spaces[24]} 0 ${Spaces[36]};

	${media.mobile} {
		height: ${LOGO_MOBILE_SIZE};
	}
`
