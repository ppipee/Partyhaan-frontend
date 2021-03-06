import React, { useEffect, KeyboardEvent } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Gap from 'common/components/Gap'
import TextField from 'common/components/TextField'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import signinValidatedSchema from './schema'
import { SigninButton } from './styled'
import { BaseUser } from 'modules/user/types'
import { Green } from 'common/styles/colors'

const SigninForm = () => {
	const { isDesktop } = useResponsive()
	const { handleSubmit, register, errors, reset } = useForm<BaseUser>({
		resolver: yupResolver(signinValidatedSchema),
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
				<TextField
					size={isDesktop ? 'default' : 'small'}
					label="รหัสผ่าน"
					name="password"
					type="password"
					ref={register}
					errorMessage={errors.password?.message}
				/>
			</Gap>
			<SigninButton $size={isDesktop ? 44 : 36} $color={Green}>
				เข้าสู่ระบบ
			</SigninButton>
		</form>
	)
}

export default SigninForm
