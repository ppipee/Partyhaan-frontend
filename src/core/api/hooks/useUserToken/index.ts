import { useCookies } from 'react-cookie'

import { PARTY_HAAN_COOKIES, TOKEN_KEY } from 'core/api/constants'

const HEADER_KEY = 'Authorization'

export default function useUserToken() {
	const [cookies] = useCookies([PARTY_HAAN_COOKIES])

	const token = cookies[TOKEN_KEY]

	return { headerKey: HEADER_KEY, token }
}
