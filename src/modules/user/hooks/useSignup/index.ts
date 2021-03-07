import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import useFetch from 'core/api/hooks/useFetch'
import useSetUserToken from 'core/api/hooks/useSetUserToken'

import endpoint from 'common/endpoint'

import { HOME_PATH } from 'modules/home/routes/path'
import useUserStore from 'modules/user/stores/UserStore/hooks/useUserStore'
import { BaseUser, User } from 'modules/user/types'

export default function useSignup() {
	const [, setUserState] = useUserStore()
	const setToken = useSetUserToken()
	const history = useHistory()

	const [{ loading, data, error }, execute] = useFetch<{ token: string; user: User }>(
		endpoint.signup(),
		{ method: 'post' },
		true,
	)

	const isLoading = loading && !error && !data

	const signup = useCallback(
		(data: BaseUser) => {
			execute({ data })
		},
		[execute],
	)

	useEffect(() => {
		if (!isLoading && data) {
			const { user, token } = data

			setUserState({ user })
			setToken(token)
			history.push(HOME_PATH)
		}
	}, [data, isLoading])

	return { isLoading, signup }
}
