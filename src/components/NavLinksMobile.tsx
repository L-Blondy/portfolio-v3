import { SETTINGS } from 'src/config'
import { SECTION_ID } from 'src/types'
import { cn } from 'src/utils/cn'
import { scrollsToSection } from 'src/utils/scrollsToSection'
import { ResumeLink } from './ResumeLink'

const baseClassNames = 'text-xl font-medium px-4 pt-2 pb-1.5 hover:text-dark-primary transition-colors text-dark-font'

interface NavLinksMobileProps {
	onClick: (e: React.MouseEvent<HTMLElement>) => void
	isOpen: boolean
}

export const NavLinksMobile = ({
	onClick,
	isOpen,
}: NavLinksMobileProps) => {



	return (
		<div className={cn`fixed inset-0 flex-center transform transition-transform duration-500 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`} style={{ background: SETTINGS.DARK_BACKGROUND_COLOR }} onClick={onClick}>
			<div className='absolute right-0 top-0 text-dark-font h-16 flex-center mr-4 gap-1'>
				close
			</div>
			<ul role='menubar' className='flex flex-col items-center gap-2'>
				<li role='menuitem'>
					<button className={`${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.PROJECTS)}>Projects</button>
				</li>
				<li role='menuitem'>
					<button className={`${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.SKILLS)}>Skills</button>
				</li>
				<li role='menuitem'>
					<ResumeLink className={`${baseClassNames}`}>
						Resume
					</ResumeLink>
				</li>
				<li role='menuitem'>
					<button className={`${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.CONTACT)}>Contact</button>
				</li>
			</ul>
		</div>
	)
}