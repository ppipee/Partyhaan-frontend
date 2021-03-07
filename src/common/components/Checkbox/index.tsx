import React, { forwardRef, InputHTMLAttributes } from 'react'

import { Gray } from 'common/styles/colors'

import CorrectIcon from '../icons/CorrectIcon'
import { BaseCheckbox, Container, HiddenCheckbox, Label, LabelError } from './styled'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	errorMessage?: string
}

const ICON_SIZE = 14

const Checkbox = forwardRef<HTMLInputElement, Props>(({ className, errorMessage, label, checked, ...props }, ref) => {
	return (
		<div className={className}>
			<Container>
				<HiddenCheckbox ref={ref} type="checkbox" {...props} />
				<BaseCheckbox $checked={checked}>{checked && <CorrectIcon size={ICON_SIZE} color={Gray.White} />}</BaseCheckbox>
				<Label>{label}</Label>
			</Container>
			{errorMessage && <LabelError>{errorMessage}</LabelError>}
		</div>
	)
})

export default Checkbox
