import { CSSProperties } from 'react'
import { Button } from 'src/components/Button'
import { SectionHeader } from 'src/components/SectionHeader'
import { theme } from 'tailwind.config'

enum FIELD {
	EMAIL = 'email',
	FULLNAME = 'fullname',
	MESSAGE = 'message',
}

interface Props {
	className?: string
	style?: CSSProperties
}

export const Contact = ({
	className = '',
	style = {},
}: Props) => {



	return (
		<div className={className} style={style}>
			<div className='container flex justify-center py-12 sm:py-16 md:py-20'>
				<div className='max-w-xl w-full flex flex-col gap-5 sm:gap-8'>
					<SectionHeader>Contact me</SectionHeader>

					<p className='sm:text-lg opacity-90'>Feel free to reach out. I'd love to hear from you!</p>

					<form className='flex flex-col gap-4 sm:gap-7' action=''>
						<div>
							<label className='flex flex-col'>
								<div className='font-medium sm:text-lg whitespace-pre'>
									Email <span className='font-bold text-red-600'>*</span>
								</div>
								<input
									className='leading-10 px-2 rounded-sm'
									style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
									name={FIELD.EMAIL}
									id={FIELD.EMAIL}
									type='email'
									maxLength={100}
									required
								/>
							</label>
						</div>
						<div>
							<label className='flex flex-col'>
								<div className='font-medium sm:text-lg whitespace-pre'>
									Full name <span className='font-bold text-red-600'>*</span>
								</div>
								<input
									className='leading-10 px-2 rounded-sm'
									style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
									name={FIELD.FULLNAME}
									id={FIELD.FULLNAME}
									type='text'
									minLength={3}
									maxLength={60}
									required
								/>
							</label>
						</div>
						<div>
							<label className='flex flex-col'>
								<div className='font-medium sm:text-lg whitespace-pre'>
									Message <span className='font-bold text-red-600'>*</span>
								</div>
								<textarea
									className='px-2 py-1.5 rounded-sm'
									style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
									name={FIELD.MESSAGE}
									id={FIELD.MESSAGE}
									rows={10}
									minLength={20}
									maxLength={2000}
									required
								/>
							</label>
						</div>

						<Button variant='contained' theme='light' className='text-lg'>
							Send message
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}