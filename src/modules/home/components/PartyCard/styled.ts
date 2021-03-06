import { Gray } from 'common/styles/colors'
import media from 'common/styles/media'
import { Spaces } from 'common/styles/mixins'
import styled from 'styled-components'

const CARD_WIDTH = '220px'
const LINE_NUMBERS = 2

export const Card = styled.div`
	width: ${CARD_WIDTH};
	border: 1px solid ${Gray[100]};
	border-radius: 8px;

	${media.mobile} {
		width: 100%;
	}
`

export const ImageCover = styled.img`
	width: inherit;
	padding-bottom: calc(100% * 3 / 4);
	object-fit: cover;

	${media.mobile} {
		padding-bottom: 100%;
	}
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
	border: 1px solid ${Gray[700]};
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
