import React from 'react'

import ModalLoading from 'common/components/ModalLoading'
import { Green } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'

import useJoinParty from 'modules/home/hooks/useJoinParty'

import { Button } from './styled'

type Props = {
	disabled: boolean
	partyId: string
}

const JoinButton = ({ disabled, partyId }: Props) => {
	const { isDesktop } = useResponsive()
	const { isLoading, joinParty } = useJoinParty(partyId)

	return (
		<>
			<Button $size={isDesktop ? 44 : 28} disabled={disabled || isLoading} onClick={joinParty} $color={Green}>
				Join
			</Button>
			{isLoading && <ModalLoading />}
		</>
	)
}

export default JoinButton
