import React, { ReactNode } from 'react'
import { BarWrapper, BarContainer, EmptyBlock } from './styled'

type Props = {
	className?: string
	children: ReactNode
}

const NavigationBar = ({ children, ...props }: Props) => {
	return (
		<>
			<EmptyBlock />
			<BarWrapper>
				<BarContainer {...props}>{children}</BarContainer>
			</BarWrapper>
		</>
	)
}

export default NavigationBar
