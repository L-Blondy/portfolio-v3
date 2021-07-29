

export const getObserverRootElement = () => {

	return typeof document !== 'undefined'
		? document.querySelector('#__next .app-scrollbars > div')
		: undefined
}