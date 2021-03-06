import React, { useCallback, useEffect, KeyboardEvent } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Gap from 'common/components/Gap'
import TextField from 'common/components/TextField'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import { Party } from 'modules/home/types'

import partyValidatedSchema from './schema'
import { CreatePartyButton, FormContainer } from './styled'

type Props = {
	onClose: () => void
}

const CreatePartyForm = ({ onClose }: Props) => {
	const { isDesktop } = useResponsive()
	const { handleSubmit, register, errors, reset } = useForm<Pick<Party, 'name' | 'maxMembers'>>({
		resolver: yupResolver(partyValidatedSchema),
	})

	useEffect(() => {
		return () => {
			reset()
			close()
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
		<FormContainer onSubmit={handleSubmit(onSubmit)} onKeyPress={onEnter}>
			<Gap $type="vertical" $size={Spaces[2]} $alignItems="stretch">
				<TextField
					size={isDesktop ? 'default' : 'small'}
					label="ชื่อปาร์ตี้"
					name="name"
					ref={register}
					errorMessage={errors.name?.message}
				/>
				<TextField
					size={isDesktop ? 'default' : 'small'}
					label="จำนวนคนที่ขาด"
					name="maxMembers"
					ref={register}
					errorMessage={errors.maxMembers?.message}
				/>
			</Gap>
			<CreatePartyButton>สร้างปาร์ตี้</CreatePartyButton>
		</FormContainer>
	)
}

export default CreatePartyForm
