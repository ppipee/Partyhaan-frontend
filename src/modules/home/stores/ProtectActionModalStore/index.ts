import { atom } from 'recoil'

const ProtectActionModalStore = atom({
	key: 'ProtectActionModalStore',
	default: {
		isOpen: false,
	},
})

export default ProtectActionModalStore
