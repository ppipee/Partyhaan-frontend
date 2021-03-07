import React, { ReactNode } from 'react'
import { BarWrapper, BarContainer, EmptyBlock } from './styled'

type Props = {
	className?: string
	children: ReactNode
	zIndex?: number
}

const NavigationBar = ({ children, zIndex, ...props }: Props) => {
	return (
		<>
			<EmptyBlock />
			<BarWrapper $zIndex={zIndex}>
				<BarContainer {...props}>{children}</BarContainer>
			</BarWrapper>
		</>
	)
}

export default NavigationBar
