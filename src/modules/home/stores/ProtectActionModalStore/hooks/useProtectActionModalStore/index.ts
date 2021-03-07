import ProtectActionModalStore from 'modules/home/stores/ProtectActionModalStore'
import { useRecoilState, useRecoilValue } from 'recoil'

const useProtectActionModalStore = () => useRecoilState(ProtectActionModalStore)

export const useProtectActionModalStoreValue = () => useRecoilValue(ProtectActionModalStore)

export default useProtectActionModalStore
