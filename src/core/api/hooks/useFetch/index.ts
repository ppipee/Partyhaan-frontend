import useAxios from 'axios-hooks'
import { AxiosRequestConfig } from 'axios'
import requestInterceptor from 'core/api/interceptor'

export default function useFetch(url: string, { params, method, data: body }: AxiosRequestConfig) {
	const request = requestInterceptor({
		baseURL: '',
		url,
		method,
		params,
		data: body,
	})

	const [response] = useAxios(request)

	return response
}
