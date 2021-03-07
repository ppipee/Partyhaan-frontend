import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Card, CardContent, CardFooter, Content, ImageLoading, Line } from './styled'

const PartyCardLoading = () => {
	return (
		<Card>
			<ImageLoading>
				<Skeleton />
			</ImageLoading>
			<CardContent>
				<Content className="rg16 rg14-mWeb">
					<Skeleton count={2} />
				</Content>
				<Line />
				<CardFooter>
					<span className="rg14 rg12-mWeb">
						<Skeleton width={50} />
					</span>
				</CardFooter>
			</CardContent>
		</Card>
	)
}

export default PartyCardLoading
