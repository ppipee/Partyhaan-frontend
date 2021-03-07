import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { Spaces } from 'common/styles/mixins'

export const MobileContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: ${Spaces[12]};
	overflow-y: auto;
`

export const DesktopContainer = styled(Gap).attrs({
	$type: 'grid',
	$size: Spaces[16],
})`
	overflow-y: auto;
`
