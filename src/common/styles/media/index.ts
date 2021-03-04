import { ScreenSize } from '../constants'

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const media = {
  mobile: mediaQuery(ScreenSize.Mobile),
}

export default media
