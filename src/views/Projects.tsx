import { useWindowWidth } from '@react-hook/window-size';
import { ImageProjects } from 'src/components/ImageProjects'
import { SectionHeader } from 'src/components/SectionHeader';
import { VideoProjects } from 'src/components/VideoProjects'
import { useIsMountedState } from 'src/hooks/useIsMountedState';
import { SECTION_ID } from 'src/types';



export const Projects = () => {

	const isMounted = useIsMountedState()
	const width = useWindowWidth()

	return (
		<section id={SECTION_ID.PROJECTS} className='overflow-hidden'>
			<div className='container'>


				<SectionHeader className='pt-16 pb-10 md:pb-0 md:pt-24' /* trianglesClassName='md:-ml-8 lg:-ml-12' */>
					Featured projects
				</SectionHeader>

				{width > 768 || !isMounted
					? <VideoProjects className='-mt-10' />
					: <ImageProjects />
				}
			</div>
		</section>
	)
}

