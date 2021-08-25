import css from './Landing.module.css'
import { Button } from 'src/components/Button'
import { CONTENT } from 'src/config'
import { scrollsToSection } from 'src/utils/scrollsToSection'
import { SECTION_ID } from 'src/types'



export const Landing = () => {



	return (
		<div className='md:pb-20 bg-gradient-to-r from-dark-bg to-dark-bg-darker overflow-hidden'>
			<div className='relative min-h-screen flex sm:items-center'>

				<div className='absolute bottom-0 font-semibold text-white pointer-events-none' style={{ fontSize: '200px', lineHeight: '0.7', opacity: 0.02 }}>
					TYPESCRIPT
				</div>

				<div className='sm:pb-10 w-full pt-16 md:pt-0'>
					<section className={`relative overflow-hidden flex w-full py-8 sm:py-0 sm:my-24 ${css.central_gradient}`}>
						<div className='absolute top-1/2 transform -translate-y-1/2 -right-52 font-semibold text-white pointer-events-none' style={{ fontSize: '300px', lineHeight: '0.7', opacity: 0.02 }}>
							REACT
						</div>

						<div className='sm:w-1 flex-shrink-0 bg-dark-primary' />

						<div className='max-w-5xl w-full xs:w-3/4 px-4 mx-auto'>
							<div className='max-w-2xl flex flex-col gap-8 md:gap-10 py-10 sm:py-16'>
								<h2 className='text-lg sm:text-xl text-dark-primary font-normal'>{CONTENT.LANDING.INTRO}</h2>
								<h1 className='text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-font -mt-2 sm:-mt-4 flex flex-col gap-1 sm:gap-2'>
									<div>{CONTENT.LANDING.HEADER[ 0 ]}</div>
									<div>{CONTENT.LANDING.HEADER[ 1 ]}</div>
								</h1>
								<p className='text-lg md:text-xl leading-7 md:leading-9 text-dark-font font-normal opacity-90'>{CONTENT.LANDING.MAIN}</p>
								<div className='flex items-center gap-6 py-2'>
									<Button theme='dark' variant='contained' className='flex-grow sm:flex-grow-0 md:text-lg' onClick={scrollsToSection(SECTION_ID.PROJECTS)}>View projects</Button>
									<Button theme='dark' variant='outlined' className='flex-grow sm:flex-grow-0 md:text-lg' onClick={scrollsToSection(SECTION_ID.CONTACT)}>Get in touch</Button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}