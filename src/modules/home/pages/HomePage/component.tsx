import useResponsive from 'common/styles/hooks/useResponsive'
import React from 'react'
import { Block } from './styled'

const HomePageComponent = () => {
  const { isDesktop } = useResponsive()

  return (
    <div>
      <Block>{isDesktop ? 'Home Desktop ' : 'Home Mobile'}</Block>
    </div>
  )
}

export default HomePageComponent
