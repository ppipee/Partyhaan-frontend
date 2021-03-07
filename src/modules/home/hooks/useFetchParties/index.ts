import { useCallback, useEffect } from 'react'

import useFetch from 'core/api/hooks/useFetch'

import endpoint from 'common/endpoint'
import { Page } from 'common/types'

import useHomeStore from 'modules/home/stores/HomeStore/hooks/useHomeStore'
import { Party } from 'modules/home/types'

const PAGE_SIZE = 20

export default function useFetchParties() {
	const [homeState, setHomeState] = useHomeStore()

	const currentPage = homeState.currentPage

	let [{ data, loading, error }] = useFetch<Page<Party>>(endpoint.parties(), {
		params: { page: currentPage, size: PAGE_SIZE },
	})

	const isLoading = loading && !error && !data

	useEffect(() => {
		if (!isLoading && data) {
			setHomeState((state) => ({
				...state,
				currentPage: data.currentPage,
				nextPage: data.nextPage,
				parties: [...state.parties, ...data.entities],
			}))
		}
	}, [isLoading, data])

	const hasNextPage = homeState.nextPage > homeState.currentPage

	const loadMore = useCallback(() => {
		if (hasNextPage) {
			setHomeState((state) => ({ ...state, currentPage: homeState.nextPage }))
		}
	}, [hasNextPage])

	return { isLoading, parties: homeState.parties, loadMore, hasMore: hasNextPage }
}
