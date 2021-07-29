import { useRef, useEffect } from 'react'

/**
 * 
 * @param callback 
 * @param delay 
 */
export function useInterval(callback: () => void, delay: number | null) {
	const callbackRef = useRef(callback)

	// Remember the latest callback if it changes.
	useEffect(() => {
		callbackRef.current = callback
	}, [ callback ])

	// Set up the interval.
	useEffect(() => {
		// Don't schedule if no delay is specified.
		if (!delay) {
			return
		}

		const id = setInterval(() => callbackRef.current(), delay)

		return () => clearInterval(id)
	}, [ delay ])
}
