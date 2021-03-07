import React, { KeyboardEvent, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Checkbox from 'common/components/Checkbox'
import Gap from 'common/components/Gap'
import ModalLoading from 'common/components/ModalLoading'
import TextField from 'common/components/TextField'
import { Green } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import useSignup from 'modules/user/hooks/useSignup'
import { BaseUser } from 'modules/user/types'

import signupValidatedSchema from './schema'
import { SigninButton } from './styled'

interface FormData extends BaseUser {
	confirmPassword: string
	consent: boolean
}

const SigninForm = () => {
	const { isDesktop } = useResponsive()
	const { isLoading, signup } = useSignup()

	const { handleSubmit, register, errors, reset, watch } = useForm<FormData>({
		resolver: yupResolver(signupValidatedSchema),
	})

	useEffect(() => {
		return () => {
			reset()
		}
	}, [])

	const onSubmit = ({ password, email }: FormData) => {
		const data = { password, email }
		signup(data)
	}

	const onEnter = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key === 'ENTER') {
			handleSubmit(onSubmit)
		}
	}

	const password = useRef({})
	password.current = watch('password', '')

	const consentValue = watch('consent', false)

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} onKeyPress={onEnter}>
				<Gap $type="vertical" $size={Spaces[2]} $alignItems="stretch">
					<TextField
						size={isDesktop ? 'default' : 'small'}
						label="อีเมล"
						name="email"
						ref={register}
						errorMessage={errors.email?.message}
					/>
					<div>
						<TextField
							size={isDesktop ? 'default' : 'small'}
							label="รหัสผ่าน"
							name="password"
							type="password"
							ref={register}
						/>
						<TextField
							name="confirmPassword"
							size={isDesktop ? 'default' : 'small'}
							label="ยืนยันรหัสผ่าน"
							type="password"
							ref={register}
							errorMessage={errors.confirmPassword?.message}
						/>
					</div>
				</Gap>
				<Checkbox
					className="rg14 rg12-mWeb"
					checked={consentValue}
					name="consent"
					label="ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน"
					errorMessage={errors.consent?.message}
					ref={register}
				/>
				<SigninButton $size={isDesktop ? 44 : 28} $color={Green} disabled={isLoading}>
					ยืนยัน
				</SigninButton>
			</form>
			{isLoading && <ModalLoading />}
		</>
	)
}

export default SigninForm
