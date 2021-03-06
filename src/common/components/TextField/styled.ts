import { Gray, Primary } from 'common/styles/colors'
import { FontSizes, Spaces } from 'common/styles/mixins'
import styled, { css } from 'styled-components'

type InputFieldProps = {
	$error?: boolean
	$size?: 'default' | 'small'
}

function applyInputStyles({ $error }: InputFieldProps) {
	if ($error) {
		return css`
			color: ${Primary[500]};
			border-color: ${Primary[500]};
		`
	}

	return null
}

function applyInputSize({ $size = 'default' }: InputFieldProps) {
	if ($size === 'small') {
		return css`
			font-size: ${FontSizes[14]};
			height: 28px;
		`
	}

	return css`
		font-size: ${FontSizes[16]};
		height: 36px;
	`
}

function applyMessageSize({ $size = 'default' }: InputFieldProps) {
	if ($size === 'small') {
		return css`
			font-size: ${FontSizes[12]};
		`
	}

	return css`
		font-size: ${FontSizes[14]};
	`
}

export const InputField = styled.input`
	box-shadow: none;
	outline: none;
	border: none;
	padding: ${Spaces[4]} ${Spaces[8]};
	border-bottom: 1px solid ${Gray[500]};
	width: 100%;
	caret-color: ${Primary[500]};
	background: transparent;
	${(p) =>
		!p.$error &&
		css`
			margin-bottom: ${Spaces[20]};
		`}

	${applyInputSize}
	${applyInputStyles}

	&::placeholder {
		color: ${Gray[500]};
	}
`

export const Label = styled.span`
	${applyMessageSize}
	margin-bottom:${Spaces[4]};
`

export const ErrorMessage = styled.div`
	margin-top: 4px;
	${applyMessageSize}
	${applyInputStyles}
`

export const TextFieldWrapper = styled.label`
	position: relative;
`
