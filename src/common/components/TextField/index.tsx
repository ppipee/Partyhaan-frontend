import React, { ComponentPropsWithRef, forwardRef, Ref } from 'react'

import { ErrorMessage, InputField, Label, TextFieldWrapper } from './styled'

interface TextFieldProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
	label?: string
	size?: 'default' | 'small'
	errorMessage?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, size, errorMessage, ...props }, ref) => {
	return (
		<TextFieldWrapper>
			{label && <Label $size={size}>{label}</Label>}
			<InputField $size={size} $error={!!errorMessage} {...props} ref={ref} />
			{errorMessage && (
				<ErrorMessage $size={size} $error={!!errorMessage}>
					{errorMessage}
				</ErrorMessage>
			)}
		</TextFieldWrapper>
	)
})

export default TextField
