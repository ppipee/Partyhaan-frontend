import { AxiosRequestConfig } from 'axios'

import useUserToken from '../useUserToken'

function useRequestInterceptor(config: AxiosRequestConfig) {
	const { token, headerKey } = useUserToken()

	if (!token) return config

	config.headers = {
		[headerKey]: `Bearer ${token}`,
	}

	return config
}

export default useRequestInterceptor
