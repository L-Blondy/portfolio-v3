import css from './Contact.module.css'
import { Button } from 'src/components/Button'
// import { postContactForm } from 'async/postContactForm'
import { useEffect, useRef, useState } from 'react'
import { LoadingIcon } from 'src/components/icons/LoadingIcon'
import { SuccessIcon } from 'src/components/icons/SuccessIcon'
// import { notify } from 'src/utils/notify'
import { SECTION_ID } from 'src/types'
import { InView } from 'react-intersection-observer'
import { cn } from 'src/utils/cn'

const postContactForm = (...args: any) => { return '' as any }
const notify = (_: string) => (_: string) => { }

enum CONTACT_FORM_FIELD {
	EMAIL = 'email',
	FULLNAME = 'fullname',
	MESSAGE = 'message',
}

export const Contact = () => {

	const { formRef, isSubmitting, sentWithSuccess, handleSubmit } = useContactForm()

	return (
		<div id={SECTION_ID.CONTACT} className='container flex flex-col gap-7 pt-8 mt-12 pb-24 overflow-hidden'>
			<InView>
				{({ ref, inView }) => (
					<div ref={ref} className='flex flex-col gap-5 text-center mb-4'>
						<div className='opacity-85'>
							<h2 className={cn`h1 text-primary-xdark opacity-0 ${inView && 'animate-scalein'}`}>Contact me</h2>
						</div>
						<div className='text-lg opacity-80'>
							<p className={cn`opacity-0 await-150 ${inView && 'animate-from-right-sm'}`}>Feel free to reach out.</p>
							<p className={cn`opacity-0 await-150 ${inView && 'animate-from-left-sm'}`}>I'd love to hear from you!</p>
						</div>
					</div>
				)}
			</InView>

			<InView>
				{({ ref, inView }) => (
					<div ref={ref} className=''>
						<form ref={formRef} className='flex flex-col self-center gap-6 mx-auto md:grid md:grid-cols-2 lg:mt-1 w-full max-w-lg text-md md:text-lg' onSubmit={handleSubmit}>
							<div className={`${css.container} w-0 transition-all overflow-hidden ${inView && 'w-full duration-500 delay-150'}`}>
								<label className={css.label} htmlFor={CONTACT_FORM_FIELD.EMAIL} />
								<input
									className={css.field}
									type='email'
									name={CONTACT_FORM_FIELD.EMAIL}
									id={CONTACT_FORM_FIELD.EMAIL}
									placeholder='Enter your email'
									maxLength={100}
									required
								/>
							</div>

							<div className={`${css.container} w-0 transition-all overflow-hidden ${inView && 'w-full duration-500 delay-400'}`}>
								<label className={css.label} htmlFor={CONTACT_FORM_FIELD.FULLNAME} />
								<input
									className={css.field}
									type='text'
									name={CONTACT_FORM_FIELD.FULLNAME}
									id={CONTACT_FORM_FIELD.FULLNAME}
									placeholder='Enter your name'
									minLength={3}
									maxLength={60}
									required
								/>
							</div>

							<div
								className={cn`
								md:col-span-2
								${css.container} 
								transition-all
								transform
								origin-top
								${inView ? 'scale-y-1 duration-500 delay-700' : 'scale-y-0'}
							`}>
								<label className={css.label} htmlFor={CONTACT_FORM_FIELD.MESSAGE} />
								<textarea
									className={`${css.field} ${inView && css.inView}`}
									name={CONTACT_FORM_FIELD.MESSAGE}
									id={CONTACT_FORM_FIELD.MESSAGE}
									rows={10}
									placeholder='Your message here'
									minLength={20}
									maxLength={1000}
									required
								/>
							</div>
							<div className={`flex items-center justify-center md:col-span-2 leading-6 opacity-0 await-1100 ${inView && 'animate-from-bottom-sm'}`}>
								<Button variant='contained' theme='light' className='mt-2' style={{ minWidth: '10rem' }} disabled={isSubmitting}>
									Send message
									{isSubmitting
										? <LoadingIcon className='ml-0.5' width={18} strokeWidth={6} />
										: sentWithSuccess ? <SuccessIcon className='mx-0.5' /> : null
									}
								</Button>
							</div>
						</form>
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