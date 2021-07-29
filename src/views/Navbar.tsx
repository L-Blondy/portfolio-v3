import { Burger } from 'src/components/Burger'
import { Logo } from 'src/components/Logo'
import { NavLinks } from 'src/components/NavLinks'


interface Props {

}

export const Navbar = ({
	...props
}: Props) => {



	return (
		<div className='absolute w-full z-10'>
			<div className='hidden sm:block' >
				<nav className='flex items-center justify-between py-7 px-8 lg:px-12'>
					<Logo />
					<NavLinks />
				</nav>
			</div>

			<div className='block sm:hidden'>
				<nav className='flex items-center justify-between px-3'>
					<Logo />
					<Burger className='ml-auto -mr-3' />
				</nav>
			</div>
		</div>
	)
}

