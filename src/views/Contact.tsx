import { CSSProperties, useEffect, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { postContactForm } from 'src/async/postContactForm'
import { Button } from 'src/components/Button'
import { LoadingIcon } from 'src/components/icons/LoadingIcon'
import { SuccessIcon } from 'src/components/icons/SuccessIcon'
import { SectionHeader } from 'src/components/SectionHeader'
import { TypeWriter } from 'src/components/TypeWriter'
import { CONTACT_FORM_FIELD, SECTION_ID } from 'src/types'
import { cn } from 'src/utils/cn'
import { notify } from 'src/utils/notify'
import { theme } from 'tailwind.config'


interface Props {
	className?: string
	style?: CSSProperties
}

export const Contact = ({
	className = '',
	style = {},
}: Props) => {

	const { formRef, isSubmitting, sentWithSuccess, handleSubmit } = useContactForm()

	return (
		<div id={SECTION_ID.CONTACT} className={className} style={style}>
			<InView>
				{({ inView, ref }) => (
					<div ref={ref} className='container flex justify-center py-12 sm:py-16 md:py-20'>
						<div className='max-w-xl w-full flex flex-col gap-5 sm:gap-8'>
							<SectionHeader>Contact me</SectionHeader>

							<div className='sm:text-lg opacity-90'>
								<TypeWriter disabled={!inView} avgTypingDelay={60} startDelay={2000}>
									Feel free to reach out. I'd love to hear from you!
								</TypeWriter>
							</div>

							<form ref={formRef} className='flex flex-col gap-4 sm:gap-7' onSubmit={handleSubmit}>
								<div className={`transition-opacity opacity-0 ${inView && 'opacity-100 duration-1500 delay-300'}`}>
									<label className='flex flex-col'>
										<div className={cn`font-medium sm:text-lg whitespace-pre`}>
											Email <span className='font-bold text-red-600'>*</span>
										</div>
										<input
											className={cn`leading-10 px-2 rounded-sm`}
											style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
											name={CONTACT_FORM_FIELD.EMAIL}
											id={CONTACT_FORM_FIELD.EMAIL}
											type='email'
											maxLength={100}
											required
										/>
									</label>
								</div>
								<div className={`transition-opacity opacity-0 ${inView && 'opacity-100 duration-1500 delay-400'}`}>
									<label className='flex flex-col'>
										<div className={cn`font-medium sm:text-lg whitespace-pre`}>
											Full name <span className='font-bold text-red-600'>*</span>
										</div>
										<input
											className={`leading-10 px-2 rounded-sm`}
											style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
											name={CONTACT_FORM_FIELD.FULLNAME}
											id={CONTACT_FORM_FIELD.FULLNAME}
											type='text'
											minLength={3}
											maxLength={60}
											required
										/>
									</label>
								</div>
								<div className={`transition-opacity opacity-0 ${inView && 'opacity-100 duration-1500 delay-500'}`}>
									<label className='flex flex-col'>
										<div className={`font-medium sm:text-lg whitespace-pre`}>
											Message <span className='font-bold text-red-600'>*</span>
										</div>
										<textarea
											className={`px-2 py-1.5 rounded-sm`}
											style={{ boxShadow: '0 0 2px 0 #00000016', outlineColor: theme.extend.colors.light.primary }}
											name={CONTACT_FORM_FIELD.MESSAGE}
											id={CONTACT_FORM_FIELD.MESSAGE}
											rows={10}
											minLength={20}
											maxLength={2000}
											required
										/>
									</label>
								</div>
								<div className={cn`transition-all w-3/4 mx-auto ease-out ${inView && 'w-full duration-1500 delay-700'}`}>
									<Button variant='contained' theme='light' className={cn`text-lg w-full transition-opacity opacity-0 ${inView && 'opacity-100 duration-2500 delay-700'}`}>
										Send message
										{isSubmitting
											? <LoadingIcon className='ml-0.5' width={18} strokeWidth={6} />
											: sentWithSuccess ? <SuccessIcon className='mx-0.5' /> : null
										}
									</Button>
								</div>
							</form>
						</div>
					</div>
				)}
			</InView>
		</div >
	)
}

function useContactForm() {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [ isSubmitting, setIsSubmitting ] = useState(false)
	const [ sentWithSuccess, setSentWithSuccess ] = useState(false)
	const [ messageCount, setMessageCount ] = useState(0)

	useEffect(() => {
		messageCount && formRef.current?.reset()
	}, [ messageCount ])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		const elements: (HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement)[] = [].slice.call(e.currentTarget.elements) as any

		const values = elements.reduce((values, el) => {
			const fieldName = el.name as CONTACT_FORM_FIELD | undefined
			const fieldValue = el.value
			if (!fieldName || !fieldValue) return values
			return { ...values, [ fieldName ]: fieldValue }
		}, {} as Record<CONTACT_FORM_FIELD, string>)
		setIsSubmitting(true)

		postContactForm(values)
			.then(() => {
				setSentWithSuccess(true)
				notify('success')('Your message was sent with success!')
			})
			.catch(() => {
				setSentWithSuccess(false)
				notify('danger')('An unknown error has occured. Please try again later.')
			})
			.finally(() => {
				setIsSubmitting(false)
				setMessageCount(c => c + 1)
			})
	}

	return { formRef, isSubmitting, sentWithSuccess, handleSubmit }
}