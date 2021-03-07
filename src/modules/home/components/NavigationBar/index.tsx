import React from 'react'
import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins'

import BaseNavigationBar from 'modules/root/components/NavigationBar'
import { SIGNIN_PATH, SIGNUP_PATH } from 'modules/user/routes/path'
import { useUserStoreValue } from 'modules/user/stores/UserStore/hooks/useUserStore'

import { NavbarContent, NavbarTitle, UserLabel } from './styled'

const NavigationBar = () => {
	const { isDesktop } = useResponsive()
	const { user } = useUserStoreValue()

	return (
		<BaseNavigationBar>
			<NavbarContent>
				<NavbarTitle>ปาร์ตี้ทั้งหมด</NavbarTitle>
				{user ? (
					<UserLabel>{user.email}</UserLabel>
				) : (
					<Gap $size={Spaces[8]}>
						<Link to={SIGNIN_PATH}>เข้าสู่ระบบ</Link>
						{!isDesktop && (
							<>
								<span>|</span>
								<Link to={SIGNUP_PATH}>ลงทะเบียน</Link>
							</>
						)}
					</Gap>
				)}
			</NavbarContent>
		</BaseNavigationBar>
	)
}

export default NavigationBar
