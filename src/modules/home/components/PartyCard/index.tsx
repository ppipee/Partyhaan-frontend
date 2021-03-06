import { Party } from 'modules/home/types'
import React from 'react'
import JoinButton from '../JoinButton'
import { Card, ImageCover, CardContent, Content, Line, CardFooter } from './styled'

type Props = {
	party: Party
}

const PartyCard = ({ party }: Props) => {
	const { name, maxMembers, totalMembers } = party
	return (
		<Card>
			<ImageCover src="" />
			<CardContent>
				<Content className="rg16 rg14-mWeb">{name}</Content>
				<Line />
				<CardFooter>
					<span className="rg14 rg12-mWeb">
						{totalMembers}/{maxMembers}
					</span>
					<JoinButton />
				</CardFooter>
			</CardContent>
		</Card>
	)
}

export default PartyCard
