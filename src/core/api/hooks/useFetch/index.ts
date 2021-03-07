import { AxiosRequestConfig } from 'axios'
import useAxios from 'axios-hooks'

import useRequestInterceptor from 'core/api/hooks/useInterceptor'

export default function useFetch<T>(url: string, { params, method, data: body }: AxiosRequestConfig, manual = false) {
	const request = useRequestInterceptor({
		baseURL: process.env.RAZZLE_API_URL,
		url,
		method,
		params,
		data: body,
	})

	return useAxios<T>(request, { manual })
}
