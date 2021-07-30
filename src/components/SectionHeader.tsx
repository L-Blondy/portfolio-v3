import { CSSProperties, ReactNode } from 'react'
import { Triangles } from './icons/Triangles'


interface Props {
	className?: string
	trianglesClassName?: string
	style?: CSSProperties
	children: ReactNode
}

export const SectionHeader = ({
	className = '',
	trianglesClassName = '',
	style = {},
	children,
}: Props) => {



	return (
		<div className={className} style={style}>
			<div className='flex items-center gap-0 sm:gap-2'>
				<Triangles className={`text-light-primary transform origin-left h-6 w-6 sm:h-10 sm:w-10 ${trianglesClassName}`} />
				<h1 className='text-2xl sm:text-3xl lg:text-4xl'>{children}</h1>
				<div className='opacity-75 sm:opacity-100 ml-2 sm:block flex-grow h-0.5 -mb-px bg bg-light-primary rounded' />
			</div>
		</div>
	)
}