import React from 'react'
import { Link } from 'react-router-dom'
import { Spaces } from 'common/styles/mixins'
import SignupForm from 'modules/user/components/SignupForm'
import { SIGNIN_PATH } from 'modules/user/routes/path'
import { Container, SigninButton, Background, ContainerWrapper, Title, Logo, HeaderContainer } from './styled'
import useResponsive from 'common/styles/hooks/useResponsive'
import WowLogo from 'common/images/duck_wow.png'

const SignupPageComponent = () => {
	const { isDesktop } = useResponsive()

	return (
		<Background>
			<HeaderContainer $size={Spaces[16]} $justifyContent="center" $alignItems="flex-end">
				<Logo src={WowLogo} />
				<Title className="rg24 rg18-mWeb margin-right-24">สร้างบัญชีผู้ใช้</Title>
			</HeaderContainer>
			<ContainerWrapper>
				<Container $type="vertical" $size={isDesktop ? Spaces[24] : Spaces[16]}>
					<SignupForm />
					<Link to={SIGNIN_PATH}>
						<SigninButton $size={isDesktop ? 44 : 36}>เข้าสู่ระบบ</SigninButton>
					</Link>
				</Container>
			</ContainerWrapper>
		</Background>
	)
}

export default SignupPageComponent
