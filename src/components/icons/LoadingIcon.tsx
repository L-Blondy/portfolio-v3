interface Props {
	animate?: boolean
	width?: number | string
	className?: string
	strokeWidth?: number | string
}

export const LoadingIcon = ({
	className = '',
	width = 64,
	animate = true,
	strokeWidth = 3,
}: Props) => {



	return (
		<svg className={className} version="1.1" width={width} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">
			<circle cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth} stroke="currentColor" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
				{animate && (
					<>
						<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite" />
						<animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite" />
						<animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite" />
					</>
				)}
			</circle>
		</svg>
	)
}
