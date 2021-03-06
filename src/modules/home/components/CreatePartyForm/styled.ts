import Button from 'common/components/Button'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'

export const CreatePartyButton = styled(Button)`
	width: 100%;
	margin-top: ${Spaces[24]};
	font-weight: bold;
`

export const FormContainer = styled.form`
	${media.mobile} {
		margin-top: 30vh;
	}
`
