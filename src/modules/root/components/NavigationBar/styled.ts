import ContentContainer from 'common/components/ContentContainer'
import { Gray, Primary } from 'common/styles/colors'
import { NAV_HEIGHT } from 'common/styles/constants'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'

export const BarContainer = styled(ContentContainer)`
	height: ${NAV_HEIGHT};
	padding: 0 ${Spaces[16]};
	display: flex;
	align-items: center;
	color: ${Gray.White};
	background: transparent;

	${media.mobile} {
		padding: 0 ${Spaces[12]};
	}
`

export const BarWrapper = styled.div`
	position: fixed;
	top: 0;
	background-color: ${Primary[500]};
	width: 100vw;
	z-index: 100;
`

export const EmptyBlock = styled.div`
	width: 100vw;
	pointer-events: none;
	height: ${NAV_HEIGHT};
`
