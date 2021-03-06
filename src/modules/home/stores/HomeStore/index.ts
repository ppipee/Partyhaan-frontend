import { atom } from 'recoil'

const HomeStore = atom({
	key: 'HomeStore',
	default: {
		value: 1,
	},
})

export default HomeStore
