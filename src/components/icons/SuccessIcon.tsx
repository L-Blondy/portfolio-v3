

interface Props {
	className?: string
}

export const SuccessIcon = ({
	className = '',
}: Props) => {



	return (
		<svg className={className} fill='currentColor' width='16' height='16' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 16 16" enableBackground="new 0 0 16 16" xmlSpace="preserve">
			<path fillRule="evenodd" clipRule="evenodd" d="M14,3c-0.28,0-0.53,0.11-0.71,0.29L6,10.59L2.71,7.29C2.53,7.11,2.28,7,2,7
			C1.45,7,1,7.45,1,8c0,0.28,0.11,0.53,0.29,0.71l4,4C5.47,12.89,5.72,13,6,13s0.53-0.11,0.71-0.29l8-8C14.89,4.53,15,4.28,15,4
			C15,3.45,14.55,3,14,3z"/>
		</svg>
	)
}