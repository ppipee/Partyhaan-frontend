import { useCookies } from 'react-cookie'

import { PARTY_HAAN_COOKIES, TOKEN_KEY } from 'core/api/constants'

const ONE_DAY = 24 * 60 * 60

export default function useSetUserToken() {
	const [, setCookies] = useCookies([PARTY_HAAN_COOKIES])

	return (token: string) => setCookies(TOKEN_KEY, token, { path: '/', maxAge: ONE_DAY })
}
