import React, { KeyboardEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Gap from 'common/components/Gap'
import ModalLoading from 'common/components/ModalLoading'
import TextField from 'common/components/TextField'
import { Green } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import useSignin from 'modules/user/hooks/useSignin'
import { BaseUser, User } from 'modules/user/types'

import signinValidatedSchema from './schema'
import { SigninButton } from './styled'

const SigninForm = () => {
	const { isDesktop } = useResponsive()
	const { signin, isLoading } = useSignin()

	const { handleSubmit, register, errors, reset } = useForm<BaseUser>({
		resolver: yupResolver(signinValidatedSchema),
	})

	useEffect(() => {
		return () => {
			reset()
		}
	}, [])

	const onSubmit = (data: BaseUser) => {
		signin(data)
	}

	const onEnter = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key === 'ENTER') {
			handleSubmit(onSubmit)
		}
	}

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
					<TextField
						size={isDesktop ? 'default' : 'small'}
						label="รหัสผ่าน"
						name="password"
						type="password"
						ref={register}
						errorMessage={errors.password?.message}
					/>
				</Gap>
				<SigninButton $size={isDesktop ? 44 : 28} $color={Green} disabled={isLoading}>
					เข้าสู่ระบบ
				</SigninButton>
			</form>
			{isLoading && <ModalLoading />}
		</>
	)
}

export default SigninForm
