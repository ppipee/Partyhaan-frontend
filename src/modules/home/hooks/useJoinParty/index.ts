import { useCallback, useEffect } from 'react'

import useFetch from 'core/api/hooks/useFetch'

import endpoint from 'common/endpoint'

import useHomeStore from 'modules/home/stores/HomeStore/hooks/useHomeStore'
import { Party } from 'modules/home/types'

export default function useJoinParty(partyId: string) {
	const [, setHomeState] = useHomeStore()
	const [{ error, data, loading }, execute] = useFetch<Party>(endpoint.party(partyId), { method: 'put' }, true)

	const isLoading = loading && !error && !data

	const joinParty = useCallback(() => {
		execute()
	}, [execute])

	useEffect(() => {
		if (!isLoading && data) {
			setHomeState((state) => {
				const partyIndex = state.parties.findIndex((party) => party.id === partyId)
				const parties = [...state.parties]

				parties[partyIndex] = data

				return {
					...state,
					parties,
				}
			})
		}
	}, [isLoading, data])

	return { isLoading, joinParty }
}
