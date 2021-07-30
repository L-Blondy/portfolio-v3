import { useCallback, useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Video } from 'src/components/Video'
import { Button } from 'src/components/Button'
import { GithubIcon } from 'src/components/icons/GithubIcon'
import Link from 'next/link'
import { cn } from 'src/utils/cn'
import { BaseProjectProps, ProjectConfig } from 'src/types'
import { SETTINGS } from 'src/config'
import { getObserverRootElement } from 'src/utils/getObserverRootElement'
import { useWindowWidth } from '@react-hook/window-size'


enum DEVICE {
	PHONE = 'phone',
	TABLET = 'tablet',
}

interface Props extends BaseProjectProps {
	canPlay: boolean
	onObserverEntry: (e: IntersectionObserverEntry) => void
	srcTablet: ProjectConfig[ 'VIDEO' ][ 'TABLET' ]
	srcPhone: ProjectConfig[ 'VIDEO' ][ 'PHONE' ]
}

export const VideoProject = ({
	title,
	description,
	technologies,
	githubUrl,
	projectUrl,
	canPlay,
	onObserverEntry,
	srcTablet,
	srcPhone,
}: Props) => {

	const [ device, setDevice ] = useState<DEVICE>(DEVICE.TABLET)
	const [ isPlaying, setIsPlaying ] = useState(false)
	const windowWidth = useWindowWidth()

	const handledEnded = useCallback((device: DEVICE) => () => setDevice(device), [])
	const handlePause = useCallback(() => () => setIsPlaying(false), [])
	const handlePlay = useCallback((device: DEVICE) => () => {
		setDevice(device)
		setIsPlaying(true)
	}, [])

	return (
		<InView
			as='article'
			id={title}
			threshold={[ 0.01, 0.2, 0.4, 0.6, 0.8, 0.99 ]}
			onChange={(_, e) => e && onObserverEntry(e)}>

			<div className='grid grid-cols-2 gap-24 lg:gap-32 place-items-center'>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<div ref={ref} className={cn`relative opacity-0 speed-700 ${inView && 'animate-from-left-sm'}`} style={{ margin: '30% 0' }}>
							<div className={cn`
									transform
									transition-all
									duration-1000
									origin-left
									${!isPlaying && 'scale-90'}
									${isPlaying && device === DEVICE.PHONE && '-translate-x-12 opacity-0'}
									${isPlaying && device === DEVICE.TABLET && 'scale-105'}
								`}>
								<Video
									className='video tablet'
									src={srcTablet}
									type='video/mp4'
									play={canPlay && device === DEVICE.TABLET}
									onEnded={handledEnded(DEVICE.PHONE)}
									playbackRate={SETTINGS.VIDEO_PLAYBACK_RATE}
									onPause={handlePause()}
									onPlay={handlePlay(DEVICE.TABLET)}
									preloadWhen={windowWidth > 768}
									muted
								/>
							</div>

							<div
								className={cn`
									absolute 
									inset-0
									flex-center
									transform
									scale-65
									transition-all
									duration-1000
									${!isPlaying && 'translate-x-1/3 translate-y-1/3'}
									${isPlaying && device === DEVICE.TABLET && 'translate-x-2/5 translate-y-1/3 opacity-0 pointer-events-none'}
									${isPlaying && device === DEVICE.PHONE && 'scale-90'}
								`}>
								<Video
									className='video phone'
									src={srcPhone}
									type='video/mp4'
									play={canPlay && device === DEVICE.PHONE}
									onEnded={handledEnded(DEVICE.TABLET)}
									playbackRate={SETTINGS.VIDEO_PLAYBACK_RATE}
									onPause={handlePause()}
									onPlay={handlePlay(DEVICE.PHONE)}
									preloadWhen={windowWidth > 768}
									muted
								/>
							</div>
						</div>
					)}
				</InView>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<div ref={ref} className='flex flex-col'>
							<div className=''>
								<h2 className={cn`mb-1 text-3xl font-medium opacity-0 speed-500 ${inView && 'animate-from-right-sm'}`}>
									{title}
								</h2>
							</div>
							<div className='leading-7'>
								<div className='pb-1 opacity-90'>
									<p className={cn`opacity-0 await-75 speed-500 ${inView && 'animate-from-right-sm'}`}>
										{description}
									</p>
								</div>
								<div className=''>
									<h3 className={cn`text-lg mt-1.5 font-medium opacity-0 await-150 speed-500 ${inView && 'animate-from-right-sm'}`}>
										Technology
									</h3>
								</div>
								<div className='opacity-90'>
									<p className={cn`opacity-0 await-250 speed-500 ${inView && 'animate-from-right-sm'}`}>
										{technologies}
									</p>
								</div>
							</div>
							<div className={cn`flex mt-4 gap-3 py-1 opacity-0 await-250 speed-700 ${inView && 'animate-from-right-sm'}`}>
								<Link href={projectUrl}>
									<a hrefLang='en' target='_blank' rel='noopener noreferrer'>
										<span className='absolute invisible pointer-events-none'>VISIT WEBSITE</span>
										<Button variant='contained' theme='light'>
											Visit website
										</Button>
									</a>
								</Link>
								<Link href={githubUrl}>
									<a hrefLang='en' target='_blank' rel='noopener noreferrer'>
										<span className='absolute invisible pointer-events-none'>GITHUB</span>
										<Button variant='outlined' theme='light'>
											Github
											<GithubIcon className='pb-px' />
										</Button>
									</a>
								</Link>
							</div>
						</div>
					)}
				</InView>
			</div >
		</InView >
	)
}