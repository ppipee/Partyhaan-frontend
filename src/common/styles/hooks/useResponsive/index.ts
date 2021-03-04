import { useMediaQuery } from 'react-responsive'
import { ScreenSize } from 'common/styles/constants'

export default function useResponsive() {
  const isDesktop = useMediaQuery({ minWidth: ScreenSize.Mobile + 1 })

  return { isDesktop }
}
