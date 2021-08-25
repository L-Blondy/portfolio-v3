import { SECTION_ID } from 'src/types'
import { scrollsToSection } from 'src/utils/scrollsToSection'
import { ResumeLink } from './ResumeLink'

const baseClassNames = 'font-medium px-4 pt-2 pb-1.5 hover:text-dark-primary transition-colors text-dark-font'

interface NavLinksDesktopProps {
	className?: string
}

export function NavLinksDesktop({
	className = '',
}: NavLinksDesktopProps) {



	return (
		<div className={className}>
			<ul role='menubar' className='flex items-center gap-2'>
				<li role='menuitem'>
					<button className={`text-lg ${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.PROJECTS)}>Projects</button>
				</li>
				<li role='menuitem'>
					<button className={`text-lg ${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.SKILLS)}>Skills</button>
				</li>
				<li role='menuitem'>
					<ResumeLink className={`text-lg ${baseClassNames}`}>
						Resume
					</ResumeLink>
				</li>
				<li role='menuitem' className='pl-4'>
					<button className={`text-dark-primary border border-dark-primary rounded px-4 pt-2 pb-1.5 hover:bg-dark-primary hover:bg-opacity-20 opacity-100 text-base ${baseClassNames}`} onClick={scrollsToSection(SECTION_ID.CONTACT)}>Contact</button>
				</li>
			</ul>
		</div>
	)
}