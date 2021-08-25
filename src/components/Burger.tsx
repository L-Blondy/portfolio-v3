

interface Props {
	className?: string
	onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Burger = ({
	className = '',
	onClick,
}: Props) => {



	return (
		<span className={className} onClick={onClick}>
			<div className='h-16 w-16 flex items-center justify-center'>
				<svg className='text-dark-primary' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="5" width="36" height="3" fill="currentColor" />
					<rect x="12" y="17" width="24" height="3" fill="currentColor" />
					<rect x="24" y="29" width="12" height="3" fill="currentColor" />
				</svg>
			</div>
		</span>
	)
}