import React from 'react'

import DefaultImage from 'common/images/thumbnail-default.png'

import { Party } from 'modules/home/types'

import JoinButton from '../JoinButton'
import { Card, CardContent, CardFooter, Content, ImageCover, Line } from './styled'

type Props = {
	party: Party
}

const PartyCard = ({ party }: Props) => {
	const { name, maxMembers, totalMembers, canJoin } = party

	return (
		<Card>
			<ImageCover src={DefaultImage} />
			<CardContent>
				<Content className="rg16 rg14-mWeb">{name}</Content>
				<Line />
				<CardFooter>
					<span className="rg14 rg12-mWeb">
						{totalMembers}/{maxMembers}
					</span>
					<JoinButton disabled={!canJoin} partyId={party.id} />
				</CardFooter>
			</CardContent>
		</Card>
	)
}

export default PartyCard
