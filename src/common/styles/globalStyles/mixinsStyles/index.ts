import { createGlobalStyle, css } from 'styled-components'

import { FontSizes, Spaces } from 'common/styles/mixins'
import media from 'common/styles/media'

const generateMargin = () => {
	const marginTemplate = ['top', 'left', 'bottom', 'right']
	let margin = ''

	for (const position of marginTemplate) {
		for (const key in Spaces) {
			margin += `.margin-${position}-${key}{
        margin-${position} : ${Spaces[key]};
      }`
		}
	}
	return css`
		${margin}
	`
}

const generateTypography = () => {
	let fontSizes = ''

	for (const key in FontSizes) {
		fontSizes += `.rg${key} {
      font-size: ${FontSizes[key]};
    }`
	}

	let mWebFontSizes = ''
	for (const key in FontSizes) {
		mWebFontSizes += `.rg${key}-mWeb {
      font-size: ${FontSizes[key]};
    }`
	}

	return css`
		${fontSizes}

		${media.mobile} {
			${mWebFontSizes}
		}
	`
}

const MixinsGlobalStyles = createGlobalStyle`
  ${generateMargin}
  ${generateTypography}
`

export default MixinsGlobalStyles
