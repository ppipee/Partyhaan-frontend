import styled from 'styled-components'

import { Gray } from 'common/styles/colors'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'

const CARD_WIDTH = '220px'
const LINE_NUMBERS = 2

export const Card = styled.div`
	width: ${CARD_WIDTH};
	border: 1px solid ${Gray[100]};
	border-radius: 8px;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.08), 0px 0px 3px rgba(0, 0, 0, 0.08);

	${media.mobile} {
		width: 100%;
	}
`

export const ImageCover = styled.img`
	width: inherit;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
`

export const CardContent = styled.div`
	padding: ${Spaces[12]};

	${media.mobile} {
		padding: ${Spaces[8]};
	}
`

export const Content = styled.div`
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: ${LINE_NUMBERS};
	-webkit-box-orient: vertical;
`

export const Line = styled.div`
	border: 1px solid ${Gray[300]};
	width: 100%;
	margin: ${Spaces[12]} 0 ${Spaces[10]};

	${media.mobile} {
		margin: ${Spaces[8]} 0 ${Spaces[8]};
	}
`

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ImageLoading = styled.div`
	width: inherit;
	padding-bottom: calc(100% * 3 / 4);
	position: relative;

	${media.mobile} {
		padding-bottom: 100%;
	}

	& > * {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		& > span {
			display: block;
			border-radius: 8px;
			height: 100%;
		}
	}
`
