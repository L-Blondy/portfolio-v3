import { CSSProperties, ReactNode } from 'react'
import { SmallTriangle } from './icons/SmallTriangle'


interface Props {
	className?: string
	style?: CSSProperties
	title: ReactNode
	content: ReactNode
}

export const Skill = ({
	className = '',
	style = {},
	title,
	content,
}: Props) => {


	return (
		<li className={className} style={style}>
			<div className='flex items-center gap-3' >
				<SmallTriangle className='flex-shrink-0 text-light-primary stroke-2 md:stroke-3' />
				<div>
					<h2 className='text-lg md:text-xl font-medium'>{title}</h2>
					<p className='opacity-90'>{content}</p>
				</div>
			</div >
		</li >
	)
}