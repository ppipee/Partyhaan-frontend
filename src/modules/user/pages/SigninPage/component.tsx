import React from 'react'
import { Link } from 'react-router-dom'

import PartyHaanLogo from 'common/images/logo.png'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import SigninForm from 'modules/user/components/SigninForm'
import { SIGNUP_PATH } from 'modules/user/routes/path'

import { Background, Container, ContainerWrapper, Logo, SignupButton } from './styled'

const SigninPageComponent = () => {
	const { isDesktop } = useResponsive()

	return (
		<Background>
			
			<ContainerWrapper>
				<Logo src={PartyHaanLogo} />
				<Container $type="vertical" $size={isDesktop ? Spaces[24] : Spaces[16]}>
					<SigninForm />
					<Link to={SIGNUP_PATH}>
						<SignupButton $size={isDesktop ? 44 : 36}>สร้างบัญชีผู้ใช้ใหม่</SignupButton>
					</Link>
				</Container>
			</ContainerWrapper>
		</Background>
	)
}

export default SigninPageComponent
