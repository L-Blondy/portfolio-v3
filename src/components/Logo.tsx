

interface Props {
	className?: string
}

export const Logo = ({
	className = '',
}: Props) => {



	return (
		<div className={className}>
			<div role='img' className='flex items-center gap-1.5'>
				<svg className='text-dark-primary transform scale-125 origin-left sm:scale-100' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.9684 18.2883C22.1467 18.6906 23 19.8974 23 21.2736C23 23.7085 21.3747 25 18.7743 25H14V12H18.3679C20.9684 12 22.5937 13.2068 22.5937 15.5358C22.5937 16.9332 21.8826 17.9495 20.9684 18.2883ZM16.0519 17.4625H18.3476C19.7901 17.4625 20.5621 16.8909 20.5621 15.6629C20.5621 14.4349 19.7901 13.9055 18.3476 13.9055H16.0519V17.4625ZM16.0519 19.2834V23.0945H18.7336C20.1558 23.0945 20.9278 22.3534 20.9278 21.1889C20.9278 20.0033 20.1558 19.2834 18.7336 19.2834H16.0519Z" fill="currentColor" />
					<path d="M18 1L3 9.31111V26.3111L18 35L33 26.6889V9.68889L18 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>

				<div className='hidden lg:flex flex-col justify-center gap-1.5 whitespace-nowrap'>
					<div className='font-semibold text-xl leading-5 text-white opacity-90'>Laurent Blondy</div>
					<div className='font-semibold text-2xs leading-2 text-dark-font'>Front-end software developer</div>
				</div>
			</div>
		</div>
	)
}