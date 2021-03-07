import styled, { css } from 'styled-components'

import { Gray, Primary } from 'common/styles/colors'
import { FontSizes, Spaces } from 'common/styles/mixins'

type Props = {
	$color?: Record<number, string>
	$size?: 28 | 44
}

function applyButtonSize({ $size = 44 }: Props) {
	if ($size === 44) {
		return css`
			font-size: ${FontSizes[18]};
			padding: ${Spaces[8]} ${Spaces[16]};
			height: ${$size}px;
			border-radius: 6px;
		`
	}

	return css`
		font-size: ${FontSizes[12]};
		padding: ${Spaces[6]} ${Spaces[12]};
		height: ${$size}px;
		border-radius: 4px;
	`
}

const Button = styled.button<Props>`
	outline: none;
	border: none;
	box-shadow: none;
	cursor: pointer;
	color: ${Gray.White};

	${({ $color = Primary }) =>
		css`
			background-color: ${$color[500]};

			&:hover {
				background-color: ${$color[300]};
			}
			&:focus {
				background-color: ${$color[500]};
			}
		`}

	&:disabled {
		background-color: ${Gray[300]};
		color: ${Gray.White};
	}

	${applyButtonSize};
`

export default Button
