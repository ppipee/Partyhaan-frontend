import { useEffect } from 'react'

import useFetch from 'core/api/hooks/useFetch'

import endpoint from 'common/endpoint'

import useUserStore from 'modules/user/stores/UserStore/hooks/useUserStore'
import { User } from 'modules/user/types'

export default function useGetMe() {
	const [, setUserState] = useUserStore()

	const [{ loading, data, error }] = useFetch<User>(endpoint.me(), {})

	const isLoading = loading && !error && !data

	useEffect(() => {
		if (!isLoading && data) {
			setUserState({ user: data })
		}
	}, [data, isLoading])
}
