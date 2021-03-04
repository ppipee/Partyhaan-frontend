import { createGlobalStyle, css } from 'styled-components'

import { Spaces } from 'common/styles/mixins'

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

const MixinsGlobalStyles = createGlobalStyle`
  ${generateMargin}
`

export default MixinsGlobalStyles
