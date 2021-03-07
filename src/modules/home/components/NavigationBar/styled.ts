import styled from 'styled-components'

import media from 'common/styles/media'

const DESKTOP_LENGTH = '150px'
const MOBILE_LENGTH = '80px'

export const NavbarContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

export const NavbarTitle = styled.div`
	margin: auto;
`

export const UserLabel = styled.div`
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: ${DESKTOP_LENGTH};

	${media.mobile} {
		display: none;
		width: ${MOBILE_LENGTH};
	}
`
