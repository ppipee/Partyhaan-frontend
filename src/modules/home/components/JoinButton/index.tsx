import useResponsive from 'common/styles/hooks/useResponsive'
import React from 'react'
import { Button } from './styled'

const JoinButton = () => {
	const { isDesktop } = useResponsive()

	return <Button $size={isDesktop ? 44 : 36}>Join</Button>
}

export default JoinButton
