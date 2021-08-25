import { Button } from 'src/components/Button'
import { SECTION_ID } from 'src/types'
import { ResumeLink } from 'src/components/ResumeLink'
import { TypeWriter } from 'src/components/TypeWriter'
import { useInView } from 'react-intersection-observer'
import { cn } from 'src/utils/cn'
import { useEffect, useState } from 'react'
import { SETTINGS } from 'src/config'


export const Resume = () => {

	const [ isDoneWriting, setIsDoneWriting ] = useState(false)
	const { ref, inView } = useInView({ triggerOnce: false })

	useEffect(() => {
		!inView && setIsDoneWriting(false)
	}, [ inView ])

	return (
		<section
			ref={ref}
			id={SECTION_ID.RESUME}
			className='mt-10 md:mt-16 lg:mt-24 py-14 md:py-20 text-center md:text-left overflow-hidden'
			style={{ backgroundColor: SETTINGS.DARK_BACKGROUND_COLOR, boxShadow: 'inset 0 0 100px 0 #00000010' }}>
			<div className='container flex flex-col md:flex-row md:justify-between gap-6'>
				<div className='flex flex-col gap-6 xl:gap-8'>
					<div className={cn`transform md:origin-left transition-all duration-1000 ${inView ? 'scale-100 opacity-100 translate-x-0' : 'opacity-0 md:-translate-x-6 scale-90'}`}>
						<h1 className='text-3xl md:text-4xl opacity-85 text-white'>Like what you see?</h1>
					</div>
					<div className={cn`text-white opacity-75 text-lg md:text-xl ${isDoneWriting && 'pr-3.5'}`}>
						<TypeWriter startDelay={1000} cursor={{ hideWhenDoneDelay: 0 }} onTypingDone={() => setIsDoneWriting(true)} disabled={!inView}>
							Check out my resume to learn more.
						</TypeWriter>
					</div>
				</div>
				<div className={cn`self-center opacity-0 ${inView && 'animate-from-bottom md:animate-from-right'}`}>
					<ResumeLink>
						<Button
							variant='outlined'
							theme='none'
							className='pl-5 pr-5 leading-6 text-lg opacity-85 mt-1 md:mt-0'>
							View Resume
						</Button>
					</ResumeLink>
				</div>
			</div>
		</section>
	)
}