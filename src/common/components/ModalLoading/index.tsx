import React from 'react'
import Loader from 'react-loader-spinner'

import { Primary } from 'common/styles/colors'

import { Overlay } from './styled'

const ModalLoading = () => {
	return (
		<Overlay>
			<Loader type="Rings" color={Primary[500]} height={150} width={150} />
		</Overlay>
	)
}

export default ModalLoading
