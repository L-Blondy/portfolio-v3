

interface Props extends React.ComponentProps<'svg'> { }

export const SmallTriangle = (props: Props) => {



	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" {...props}>
			<path d="M12.3699 8.42875L3.25725 13.8964C2.92399 14.0963 2.5 13.8563 2.5 13.4676L2.5 2.53238C2.5 2.14373 2.92399 1.90368 3.25725 2.10363L12.3699 7.57125C12.6936 7.76546 12.6936 8.23454 12.3699 8.42875Z" stroke="currentColor" />
		</svg>
	)
}