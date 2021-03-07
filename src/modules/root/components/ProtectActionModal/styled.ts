import styled from 'styled-components'
import BaseModal from 'common/components/Modal'
import media from 'common/styles/media'

const MAX_MODAL_WIDTH = '280px'

export const Title = styled.div`
	text-align: center;
`

export const Modal = styled(BaseModal)`
	${media.mobile} {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: ${MAX_MODAL_WIDTH};
		border-radius: 16px;
		display: flex;
		align-items: center;
	}
`
