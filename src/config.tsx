import Link from 'next/link'
import { ReactNode } from 'react'
import { ProjectConfig } from './types'

export const SETTINGS = {
	SCROLLBAR_WIDTH: '9px',
	SLIDER_INTERVAL: 5000,
	VIDEO_PLAYBACK_RATE: 1,
}


interface IContent {
	PROJECTS: ProjectConfig[]
	SKILLS: { TITLE: ReactNode, CONTENT: ReactNode }[]
	[ key: string ]: any
}

export const CONTENT: IContent = {
	LANDING: {
		INTRO: 'Hi, my name is Laurent.',
		HEADER: [
			'I build user driven',
			'web applications'
		],
		MAIN: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Cenozai.",
	},
	SKILLS: [
		{
			TITLE: 'Languages',
			CONTENT: 'Typescript, Javascript ES5+, HTML, CSS',
		},
		{
			TITLE: 'Frameworks',
			CONTENT: 'React.js, Next.js',
		},
		{
			TITLE: 'Testing',
			CONTENT: 'Jest, Testing library',
		},
		{
			TITLE: 'State management',
			CONTENT: 'Redux, Zustand',
		}, {
			TITLE: 'Ajax',
			CONTENT: 'Axios, Swr, Websockets',
		},
		{
			TITLE: 'Tooling',
			CONTENT: 'Webpack, Babel, Git, NPM, Yarn',
		},
		{
			TITLE: 'Styling',
			CONTENT: 'SASS, Tailwind, Bootstrap, Styled Components',
		},
		{
			TITLE: 'Design',
			CONTENT: 'Figma',
		},
		{
			TITLE: 'Backend',
			CONTENT: 'Node.js, Express.js, MongoDB',
		},
		{
			TITLE: 'Spoken languages',
			CONTENT: 'English (C2), Italian (C1), French (C1)',
		},
	],
	PROJECTS: [
		{
			TITLE: 'H2O.ai',
			DESCRIPTION: `
			Website built over a 2 weeks Web Dev Challenge.
				The requirements: build a fully functional website using no UI library.
			`,
			TECHNOLOGIES: `
				Designed with Figma, built with React, I used the formspree API to handle the form submissions.
			`,
			URL: {
				PROJECT: 'https://l-blondy.github.io/H2O/',
				GITHUB: 'https://github.com/L-Blondy/H2O',
			},
			VIDEO: {
				PHONE: '/videos/H2O-phone.mp4',
				TABLET: '/videos/H2O-tablet.mp4',
			},
			IMAGES: [ '/images/H2O_1.jpg', '/images/H2O_2.jpg', '/images/H2O_3.jpg' ]
		},
		{
			TITLE: 'Tina Ponticelli',
			DESCRIPTION: `
				A website featuring the works of Tina Ponticelli, an Italian visual artist.
			`,
			TECHNOLOGIES: <>
				The site was built with JQuery, SASS.
				I built custom npm packages to handle image lazy loading and animations.
				Feel free to check them out
				<Link href='https://preview.npmjs.com/~l-blondy?tab=packages'>
					<a className='text-light-primary font-semibold pl-1.5 underline' hrefLang='en' aria-label='Laurent Blondy npm profile' target='_blank' rel='noopener noreferrer'>
						here
					</a>
				</Link>.
			</>,
			URL: {
				PROJECT: 'https://l-blondy.github.io/Tina-Ponticelli/',
				GITHUB: 'https://github.com/L-Blondy/Tina-Ponticelli',
			},
			VIDEO: {
				PHONE: '/videos/tina-phone.mp4',
				TABLET: '/videos/tina-tablet.mp4',
			},
			IMAGES: [ '/images/tina_1.jpg', '/images/tina_2.jpg', '/images/tina_3.jpg' ]
		},
		{
			TITLE: 'ClearWeather',
			DESCRIPTION: `
				A simple Web app to quickly check the weather worldwide with a 16 days forecast. 
			`,
			TECHNOLOGIES: `
				ClearWeather is built with React.js and Algolia Places to provide places autocompletion.
				The data is fetched from the WeatherBit and 7Timer APIs, standardised client side and passed to Recharts to display the graphs.
			`,
			URL: {
				PROJECT: 'https://l-blondy.github.io/weather/',
				GITHUB: 'https://github.com/L-Blondy/weather',
			},
			VIDEO: {
				PHONE: '/videos/weather-phone.mp4',
				TABLET: '/videos/weather-tablet.mp4',
			},
			IMAGES: [ '/images/weather_1.jpg', '/images/weather_2.jpg', '/images/weather_3.jpg' ]
		},
	]
}


export const META = {
	URL: 'https://blondy.dev/',
	TITLE: 'Laurent Blondy | Front-end Software Developer',
	DESCRIPTION: CONTENT.LANDING.INTRO,
	LANGUAGE: 'en',
	ICON: {
		rel: 'icon',
		href: `/favicon.ico`,
		sizes: "32x32",
	},
	APPLE_TOUCH_IMAGE: {
		rel: 'apple-touch-icon',
		href: `/apple-touch-icon.png`,
		sizes: '64x64'
	},
	OG: {
		LOCALE: 'en_US',
		IMAGE: {
			url: '/open-graph-image.png',
			width: 1133,
			height: 841,
			alt: 'Laurent Blondy | Front-end Software Developer',
		},
		TAGS: [
			'Laurent Blondy',
			'Laurent',
			'Blondy',
			'Web dev',
			'Frontend web dev',
			'Frontend web dev portfolio',
			'Web dev protfolio',
			'Frontend developer',
			'portfolio',
			'Frontend developer portfolio'
		]
	}
}