import { ImageProject } from 'src/components/ImageProject'
import { CONTENT } from 'src/config'


export const ImageProjects = () => {

	return (
		<section className='flex flex-col gap-24'>
			{CONTENT.PROJECTS.map(PROJECT => (
				<ImageProject
					title={PROJECT.TITLE}
					description={PROJECT.DESCRIPTION}
					technologies={PROJECT.TECHNOLOGIES}
					projectUrl={PROJECT.URL.PROJECT}
					githubUrl={PROJECT.URL.GITHUB}
					images={PROJECT.IMAGES}
					key={`img-project-${PROJECT.TITLE}`}
				/>
			))}
		</section>
	)
}