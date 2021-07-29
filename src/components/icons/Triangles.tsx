

interface Props extends React.ComponentProps<'svg'> { }

export const Triangles = (props: Props) => {

	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M29.4004 19.5724C29.7215 19.767 29.7215 20.233 29.4004 20.4276L2.25915 36.8768C1.92593 37.0788 1.5 36.8389 1.5 36.4492L1.5 3.55076C1.5 3.16112 1.92593 2.92121 2.25915 3.12316L29.4004 19.5724Z" stroke="currentColor" strokeWidth="3" />
			<path d="M17.3699 19.5713C17.6936 19.7655 17.6936 20.2345 17.3699 20.4287L8.25725 25.8964C7.92399 26.0963 7.5 25.8563 7.5 25.4676L7.5 14.5324C7.5 14.1437 7.92399 13.9037 8.25725 14.1036L17.3699 19.5713Z" stroke="currentColor" strokeWidth="3" />
		</svg>

	)
}