import { toast, ToastContent, ToastOptions } from 'react-toastify'
import { Intent } from 'src/types'


export const notify = (intent: Intent) => (content: ToastContent, options: ToastOptions = {}) => {


	if (intent === 'danger') {
		options.style = {
			background: '#E85642',
			color: 'white',
		}
		options.progressStyle = {
			background: '#ffffff90',
		}
	}
	if (intent === 'success') {
		options.style = {
			background: '#5dbd11',
			color: 'white',
		}
		options.progressStyle = {
			background: '#ffffff90',
		}
	}

	if (intent === 'warning') {
		options.style = {
			background: '#f7a200',
			color: 'white',
		}
		options.progressStyle = {
			background: '#ffffff90',
		}
	}

	if (intent === 'primary') {
		options.style = {
			background: '#37AFCA',
			color: 'white',
		}
		options.progressStyle = {
			background: '#ffffff90',
		}
	}

	if (intent === 'none') {
		options.style = {
			color: '#777',
		}
		options.progressStyle = {
			background: '#eeeeee',
		}
	}

	return toast(content, options)
}
