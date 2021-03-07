import { useRecoilState, useRecoilValue } from 'recoil'

import UserStore from 'modules/user/stores/UserStore'

const useUserStore = () => useRecoilState(UserStore)

export const useUserStoreValue = () => useRecoilValue(UserStore)

export default useUserStore
