import { useState } from 'react'
import { Burger } from 'src/components/Burger'
import { Logo } from 'src/components/Logo'
import { NavLinksDesktop } from 'src/components/NavLinksDesktop'
import { NavLinksMobile } from 'src/components/NavLinksMobile'
import { cn } from 'src/utils/cn'


interface Props {

}

export const Navbar = ({
	...props
}: Props) => {

	const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(false)

	return (
		<div className='absolute w-full z-10'>
			<div className='hidden sm:block' >
				<nav className='flex items-center justify-between py-7 px-8 lg:px-12'>
					<Logo />
					<NavLinksDesktop />
				</nav>
			</div>

			<div className='block sm:hidden'>
				<nav className='flex items-center justify-between px-3'>
					<Logo />
					<Burger className='ml-auto -mr-3' onClick={() => setIsMobileNavOpen(v => !v)} />
					<NavLinksMobile isOpen={isMobileNavOpen} onClick={() => setIsMobileNavOpen(v => !v)} />}
				</nav>
			</div>
		</div>
	)
}

