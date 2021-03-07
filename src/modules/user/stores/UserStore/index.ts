import { atom } from 'recoil'

import { User } from 'modules/user/types'

const UserStore = atom({
	key: 'UserStore',
	default: {
		user: null as User,
	},
})

export default UserStore
