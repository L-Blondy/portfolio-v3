export interface BaseProjectProps {
	title: ProjectConfig[ 'TITLE' ]
	description: ProjectConfig[ 'DESCRIPTION' ]
	technologies: ProjectConfig[ 'TECHNOLOGIES' ]
	githubUrl: ProjectConfig[ 'URL' ][ 'GITHUB' ]
	projectUrl: ProjectConfig[ 'URL' ][ 'PROJECT' ]
}

export interface ProjectConfig {
	TITLE: string
	DESCRIPTION: string
	TECHNOLOGIES: string | JSX.Element
	URL: {
		PROJECT: string
		GITHUB: string
	}
	VIDEO: {
		TABLET: string
		PHONE: string
	}
	IMAGES: [ string, string, string ]
}

export enum CONTACT_FORM_FIELD {
	EMAIL = 'email',
	FULLNAME = 'fullname',
	MESSAGE = 'message',
}

export interface MailData {
	from: string
	to: string
	subject: string
	text: string
}

export type Intent = "none" | "primary" | "success" | "warning" | "danger"

export enum SECTION_ID {
	PROFILE = 'profile',
	SKILLS = 'skills',
	PROJECTS = 'projects',
	RESUME = 'resume',
	CONTACT = 'contact'
}

export enum ALIGN {
	TOP = 'start',
	CENTER = 'center'
}

export interface SkillConfig {
	ICON: string
	TITLE: string
	CONTENT: string
}