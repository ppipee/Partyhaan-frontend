import HomeStore from 'modules/home/stores/HomeStore'
import { useRecoilState, useRecoilValue } from 'recoil'

const useHomeStore = () => useRecoilState(HomeStore)

export const useHomeStoreValue = () => useRecoilValue(HomeStore)

export default useHomeStore
