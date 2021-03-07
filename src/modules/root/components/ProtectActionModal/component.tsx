import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { Spaces } from 'common/styles/mixins'

import useProtectActionModalStore from 'modules/home/stores/ProtectActionModalStore/hooks/useProtectActionModalStore'
import { SIGNIN_PATH } from 'modules/user/routes/path'

import { Modal, Title } from './styled'

const ProtectActionModalComponent = () => {
	const [, setModalState] = useProtectActionModalStore()

	const close = useCallback(() => {
		setModalState({ isOpen: false })
	}, [])

	return (
		<Modal close={close} closeWithOverlay>
			<Gap $type="vertical" $size={Spaces[36]} $alignItems="center">
				<Title className="rg18 rg16-mWeb">กรุณาเข้าสู่ระบบเพื่อใช้งานฟีเจอร์นี้</Title>
				<Link to={SIGNIN_PATH}>
					<Button>เข้าสู่ระบบ</Button>
				</Link>
			</Gap>
		</Modal>
	)
}

export default ProtectActionModalComponent
