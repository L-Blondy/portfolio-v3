import Link from 'next/link'

interface Props {
	className?: string
}


export const ResumeLink: React.FC<Props> = ({
	children = null,
	className = '',
}) => (
	<Link href='/curriculum-laurent_blondy-ENG.pdf'><a className={className} hrefLang='en' rel='noopener noreferrer' target='_blank'>{children}</a></Link>
)