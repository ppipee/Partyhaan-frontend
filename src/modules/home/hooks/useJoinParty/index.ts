import { useCallback, useEffect } from 'react'

import useFetch from 'core/api/hooks/useFetch'

import endpoint from 'common/endpoint'

import useHomeStore from 'modules/home/stores/HomeStore/hooks/useHomeStore'
import { Party } from 'modules/home/types'
import useProtectActionModalStore from 'modules/home/stores/ProtectActionModalStore/hooks/useProtectActionModalStore'
import { useUserStoreValue } from 'modules/user/stores/UserStore/hooks/useUserStore'

export default function useJoinParty(partyId: string) {
	const [, setHomeState] = useHomeStore()
	const [, setModalState] = useProtectActionModalStore()
	const { user } = useUserStoreValue()

	const [{ error, data, loading }, execute] = useFetch<Party>(endpoint.party(partyId), { method: 'put' }, true)

	const isLoading = loading && !error && !data

	const joinParty = useCallback(() => {
		execute()
	}, [execute])

	const openProtectAction = useCallback(() => {
		setModalState({ isOpen: true })
	}, [])

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

	return { isLoading, joinParty: user ? joinParty : openProtectAction }
}
