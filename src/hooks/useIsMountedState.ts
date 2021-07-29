import { useEffect, useState } from 'react'

/**
 * 
 * @returns isMounted
 */
export const useIsMountedState = () => {

	const [ isMounted, setIsMounted ] = useState(false)
	useEffect(() => setIsMounted(true), [])

	return isMounted
}