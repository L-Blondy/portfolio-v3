import { CONTACT_FORM_FIELD } from 'src/types'


export const postContactForm = (data: Record<CONTACT_FORM_FIELD, string>) => {

	return fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then((res: any) => {
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			return res.json()
		})
}