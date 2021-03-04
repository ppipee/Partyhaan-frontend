import media from 'common/styles/media'
import styled from 'styled-components'

export const Block = styled.div`
  color: red;

  ${media.mobile} {
    color: black;
  }
`
