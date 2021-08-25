import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { SentMessageInfo } from 'nodemailer'
import { CONTACT_FORM_FIELD, MailData } from 'src/types';

const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	secure: true,
	auth: {
		user: process.env.EMAIL_ACCOUNT_USERNAME,
		pass: process.env.EMAIL_ACCOUNT_PASSWORD,
	},
});

function sendMail(mailData: MailData): Promise<SentMessageInfo> {
	return new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				reject(err)
			}
			if (info) {
				resolve(info)
			}
		})
	})
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { email: from, fullname, message } = req.body as Record<CONTACT_FORM_FIELD, string>

	const mailData: MailData = {
		from,
		to: process.env.SEND_EMAIL_TO as string,
		subject: `Portfolio contact form submission from ${fullname}`,
		text: `Message sent by ${from}\n\n${message}`,
	}

	try {
		await sendMail(mailData)
		res.status(200).json({ message: 'Email sent with success' })
		return
	}
	catch (err) {
		res.status(400).json(JSON.parse(JSON.stringify(err)))
	}
}
