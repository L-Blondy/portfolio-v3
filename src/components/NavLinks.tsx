import Link from 'next/link'

const baseClassNames = 'font-medium px-4 pt-2 pb-1.5 hover:text-dark-primary transition-colors text-dark-font'

interface NavlinkProps {
	className?: string
}

export function NavLinks({
	className = '',
}: NavlinkProps) {
	return (
		<div className={className}>
			<ul role='menubar' className='flex items-center gap-2'>
				<li role='menuitem'>
					<button className={`text-lg ${baseClassNames}`}>Profile</button>
				</li>
				<li role='menuitem'>
					<button className={`text-lg ${baseClassNames}`}>Skills</button>
				</li>
				<li role='menuitem'>
					<button className={`text-lg ${baseClassNames}`}>Projects</button>
				</li>
				<li role='menuitem'>
					<Link href='#resume'>
						<a className={`text-lg ${baseClassNames}`}>Resume</a>
					</Link>
				</li>
				<li role='menuitem' className='pl-4'>
					<button className={`text-dark-primary border border-dark-primary rounded px-4 pt-2 pb-1.5 hover:bg-dark-primary hover:bg-opacity-20 opacity-100 text-base ${baseClassNames}`}>Contact</button>
				</li>
			</ul>
		</div>
	)
}