import Link from 'next/link'
import { LinkedinIcon } from 'src/components/icons/LinkedinIcon'
import { GithubIcon } from 'src/components/icons/GithubIcon'
import { TypeWriter } from 'src/components/TypeWriter'
import { SETTINGS } from 'src/config'
import { useInView } from 'react-intersection-observer'
import { cn } from 'src/utils/cn'
import { useEffect, useState } from 'react'

export const Footer = () => {

	const { ref, inView } = useInView()

	const [ isDoneTyping1, setIsDoneTyping1 ] = useState(false)
	const [ isDoneAnimating, setIsDoneAnimating ] = useState(false)

	useEffect(() => {
		if (inView) return
		setIsDoneTyping1(false)
		setIsDoneAnimating(false)
	}, [ inView ])

	useEffect(() => {
		if (!isDoneTyping1) return
		setIsDoneAnimating(true)
	}, [ isDoneTyping1 ])


	return (
		<footer className='pt-12 pb-16 text-white md:pt-10 md:pb-12 overflow-hidden' style={{ background: SETTINGS.DARK_BACKGROUND_COLOR }}>
			<div className='container'>
				<div className='flex flex-col gap-6 md:gap-4 lg:gap-6 md:flex-row md:justify-between'>
					<h2 ref={ref} className='h1 font-medium flex items-center justify-center gap-3 md:justify-start md:order-1'>
						<div className={cn`text-dark-primary filter brightness-100 ${isDoneTyping1 && ''}`}>
							<div className={cn`md:invisible opacity-0 ${inView && 'animate-from-left-sm md:animate-none'}`}>
								Laurent
							</div>
							<TypeWriter className='absolute inset-0 hidden md:block' disabled={!inView} startDelay={150} cursor={{ show: false }} onTypingDone={() => inView && setIsDoneTyping1(true)}>
								Laurent
							</TypeWriter>
						</div>
						<div style={{ color: '#00907f' }} className={cn`filter brightness-100  opacity-0 ${inView && 'animate-from-right-sm md:animate-none'} ${isDoneTyping1 && 'md:animate-scalein'}`}>
							Blondy
						</div>
					</h2>

					<div className='flex-center gap-6 md:row-span-2 md:justify-end md:order-3 md:-mb-1' style={{ color: '#d5e3e6' }}>
						<Link href='https://it.linkedin.com/in/laurent-blondy-72b364172'>
							<a
								className={cn`rounded-full opacity-0 await-400 md:await-0 speed-1500 origin-right md:origin-center ${inView && 'animate-scalein'}`}
								hrefLang='en'
								rel='noopener noreferrer'
								aria-label='Go to Linkedin profile'
								target='_blank'>
								<span className='absolute invisible pointer-events-none'>Go to Linkedin profile</span>
								<LinkedinIcon
									className={cn`${inView && 'animate-scalein'}`}
									fill='currentColor'
									color={SETTINGS.DARK_BACKGROUND_COLOR}
									width={36}
								/>
							</a>
						</Link>
						<Link href='https://github.com/L-Blondy'>
							<a
								className={cn`rounded-full opacity-0 await-400 md:await-0 speed-1500 origin-left md:origin-center ${inView && 'animate-scalein'}`}
								hrefLang='en'
								rel='noopener noreferrer'
								aria-label='Go to Github profile'
								target='_blank'>
								<span className='absolute invisible pointer-events-none'>Go to Github profile</span>
								<GithubIcon width={36} fill='currentColor' />
							</a>
						</Link>
					</div>

					<footer className='flex justify-center items-end flex-grow opacity-60 text-sm md:text-base md:order-2 md:justify-start'>
						<TypeWriter disabled={!isDoneAnimating} avgTypingDelay={50} startDelay={750}>
							Copyright &copy; 2021. All rights reserved.
						</TypeWriter>
					</footer>
				</div>
			</div>
		</footer >
	)
}