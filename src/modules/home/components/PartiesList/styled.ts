import Gap from 'common/components/Gap'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'

export const MobileContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: ${Spaces[12]};
	overflow: auto;
`

export const DesktopContainer = styled(Gap).attrs({
	$type: 'grid',
	$size: Spaces[16],
})`
	overflow: auto;
`
