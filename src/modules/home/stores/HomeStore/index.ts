import { atom } from 'recoil'

import { Party } from 'modules/home/types'

const HomeStore = atom({
	key: 'HomeStore',
	default: {
		currentPage: 1,
		nextPage: null,
		parties: [] as Party[],
	},
})

export default HomeStore
