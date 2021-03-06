import React, { useEffect, KeyboardEvent, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Gap from 'common/components/Gap'
import TextField from 'common/components/TextField'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import signupValidatedSchema from './schema'
import { SigninButton } from './styled'
import { BaseUser } from 'modules/user/types'
import { Green } from 'common/styles/colors'

const SigninForm = () => {
	const { isDesktop } = useResponsive()
	const { handleSubmit, register, errors, reset, watch } = useForm<BaseUser & { confirmPassword: string }>({
		resolver: yupResolver(signupValidatedSchema),
	})

	useEffect(() => {
		return () => {
			reset()
		}
	}, [])

	const onSubmit = () => {
		console.log('submit')
	}

	const onEnter = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key === 'ENTER') {
			handleSubmit(onSubmit)
		}
	}

	const password = useRef({})
	password.current = watch('password', '')
	console.log(errors.confirmPassword)

	return (
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
			<SigninButton $size={isDesktop ? 44 : 36} $color={Green}>
				ยืนยัน
			</SigninButton>
		</form>
	)
}

export default SigninForm
