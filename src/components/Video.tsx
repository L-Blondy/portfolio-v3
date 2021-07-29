import pure from 'src/hoc/pure'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'


const noop = () => { }

interface Props extends Omit<React.ComponentProps<'video'>, 'children'> {
	src: string
	type: string
	play: boolean
	onToggle?: (isPlaying: boolean) => void
	playbackRate?: number
	preloadDelay?: number
	preloadWhen: boolean
}

export const Video = pure(({
	src,
	type,
	play,
	onPlay = noop,
	onPause = noop,
	onToggle = noop,
	playbackRate = 1,
	preloadDelay = 3000,
	preloadWhen,
	...props
}: Props) => {

	const ref = useRef<HTMLVideoElement | null>(null)
	const [ isHover, setIsHover ] = useState(false)

	// Custom hooks (see below)
	const shouldPreload = useShouldPreload({ preloadWhen, preloadDelay, preloadType: 'metadata' })
	usePlay(play, ref)
	usePlaybackRate(playbackRate, ref)

	function handlePlay(e: SyntheticEvent<HTMLVideoElement, Event>) {
		onPlay(e)
		onToggle(true)
	}

	function handlePause(e: SyntheticEvent<HTMLVideoElement, Event>) {
		onPause(e)
		onToggle(false)
	}

	return (
		<video
			ref={ref}
			onPlay={handlePlay}
			onPause={handlePause}
			controls={isHover}
			controlsList='nodownload noremoteplayback'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			disablePictureInPicture
			preload={shouldPreload}
			{...props}>
			<source src={src} type={type} />
		</video>
	)
})

function usePlay(play: boolean, videoRef: React.MutableRefObject<HTMLVideoElement | null>) {
	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		if (play && video.paused)
			video.play()
		if (!play && !video.paused)
			video.pause()
	}, [ play ])
}

function usePlaybackRate(rate: number, videoRef: React.MutableRefObject<HTMLVideoElement | null>) {
	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		video.defaultPlaybackRate = rate
		video.playbackRate = rate
	}, [ rate ])
}


interface ShouldPreloadConfig {
	preloadWhen: boolean
	preloadDelay: number
	preloadType: 'metadata' | 'auto'
}

function useShouldPreload({
	preloadWhen,
	preloadDelay,
	preloadType,
}: ShouldPreloadConfig) {
	const cancelTokenRef = useRef<NodeJS.Timeout>()
	const [ shouldPreload, setShouldPreload ] = useState<'metadata' | 'auto' | 'none'>('none')

	useEffect(() => {
		cancelTokenRef.current && clearTimeout(cancelTokenRef.current)
		if (!preloadWhen || shouldPreload === preloadType) return
		cancelTokenRef.current = setTimeout(() => setShouldPreload(preloadType), preloadDelay)
	}, [ preloadDelay, preloadWhen, shouldPreload, preloadType ])

	return shouldPreload
}