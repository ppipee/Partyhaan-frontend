import styled from 'styled-components'

import { Gray } from 'common/styles/colors'
import { ScreenSize } from 'common/styles/constants'

const ContentContainer = styled.div`
	background: ${Gray.White};
	max-width: ${ScreenSize.Desktop}px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
`

export default ContentContainer
