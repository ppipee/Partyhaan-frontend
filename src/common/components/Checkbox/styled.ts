import styled, { css } from 'styled-components'

import { Gray, Primary } from 'common/styles/colors'
import { FontSizes, Spaces } from 'common/styles/mixins'

const CHECKBOX_SIZE = '16px'

type Props = {
	$checked?: boolean
}

export const Container = styled.label`
	display: flex;
`

export const HiddenCheckbox = styled.input`
	display: none;
`

export const BaseCheckbox = styled.span<Props>`
	position: relative;
	height: ${CHECKBOX_SIZE};
	width: ${CHECKBOX_SIZE};
	background-color: transparent;
	border: 1px solid ${Gray[300]};
	border-radius: 4px;
	cursor: pointer;

	&:hover:after {
		content: '';
		width: 100%;
		height: 100%;
		background-color: ${Gray[100]};
	}

	${(p) =>
		p.$checked &&
		css`
			background-color: ${Primary[500]};
			border: none;
			&:hover:after {
				content: '';
				width: 100%;
				height: 100%;
				border-radius: 4px;
				background-color: ${Primary[300]};
			}
		`}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
	}
`

export const Label = styled.span`
	margin-left: ${Spaces[8]};
`

export const LabelError = styled.div`
	margin-top: ${Spaces[4]};
	color: ${Primary[500]};
`
