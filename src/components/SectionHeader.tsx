import { CSSProperties, ReactNode } from 'react'
import { InView } from 'react-intersection-observer'
import { cn } from 'src/utils/cn'
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
		<InView>
			{({ inView, ref }) => (
				<div ref={ref} className={className} style={style}>
					<div className='flex items-center gap-0 sm:gap-2'>
						<Triangles
							className={cn`
								text-light-primary
								transform
								origin-left
								h-6
								w-6
								sm:h-10
								sm:w-10
								transition-all
								${inView && 'duration-1000 delay-75'}
								${trianglesClassName}
							`}
							style={{
								strokeDasharray: 100,
								strokeDashoffset: inView ? 0 : 100,
							}}
						/>
						<h1
							className={cn`
								text-2xl
								sm:text-3xl
								lg:text-4xl
								opacity-0
								${inView && 'animate-fadein'}
							`}
							style={{ animationDelay: '150ms' }}>
							{children}
						</h1>
						<div
							className={cn`
								opacity-75 
								sm:opacity-100 
								ml-2 
								sm:block
								flex-grow
								h-0.5
								-mb-px
								bg-light-primary
								rounded
								transform
								transition-transform
								scale-x-0
								origin-left
								${inView && 'scale-x-100 duration-1000 delay-500'}
							`}
						/>
					</div>
				</div>
			)}
		</InView>
	)
}