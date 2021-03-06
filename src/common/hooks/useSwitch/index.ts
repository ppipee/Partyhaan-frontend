import { useCallback, useState } from 'react'

export default function useSwitch(defaultValue = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)

	const open = useCallback(() => {
		setIsOpen(true)
	}, [])

	const close = useCallback(() => {
		setIsOpen(false)
	}, [])

	return { isOpen, open, close }
}
