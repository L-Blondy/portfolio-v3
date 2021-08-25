import { CSSProperties, ReactNode } from 'react'

const noop = () => { }

export interface ButtonProps {
	children?: ReactNode
	className?: string
	disabled?: boolean
	style?: CSSProperties
	theme: 'dark' | 'light' | 'none'
	variant: 'contained' | 'outlined'
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
	children = null,
	className = '',
	disabled = false,
	style = {},
	theme,
	variant,
	onClick = noop,
}: ButtonProps) => {

	className = `rounded py-2.5 px-5 font-semibold flex-center gap-2 ${className}`

	if (variant === 'contained') {
		if (theme === 'dark')
			className = `bg-dark-primary text-dark-bg border-2 border-dark-primary ${className}`
		if (theme === 'light')
			className = `bg-light-primary text-light-bg border-2 border-light-primary ${className}`
		className = `filter hover:brightness-110 ${className}`
	}


	if (variant === 'outlined') {
		if (theme === 'dark')
			className = `text-dark-primary bg-transparent border-2 border-dark-primary ${className}`
		if (theme === 'light')
			className = `text-light-primary bg-transparent border-2 border-light-primary ${className}`
		if (theme === 'none')
			className = `text-white bg-transparent border-2 border-white ${className}`
		className = `hover:bg-white hover:bg-opacity-20 ${className}`
	}

	return (
		<button className={className} style={style} disabled={disabled} onClick={onClick}>
			{children}
		</button >
	)
}