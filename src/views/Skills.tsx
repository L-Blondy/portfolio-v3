import { useWindowWidth } from '@react-hook/window-size'
import { InView } from 'react-intersection-observer'
import { SectionHeader } from 'src/components/SectionHeader'
import { Skill } from 'src/components/Skill'
import { CONTENT } from 'src/config'
import { SECTION_ID } from 'src/types'
import { cn } from 'src/utils/cn'
import { getObserverRootElement } from 'src/utils/getObserverRootElement'



export const Skills = () => {

	const windowWidth = useWindowWidth()


	return (
		<div className='pb-16' id={SECTION_ID.SKILLS}>
			<div className='container'>

				<SectionHeader className='pt-16 md:pt-24 pb-6 md:pb-10'>
					Technical skills
				</SectionHeader>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<ul ref={ref} className='grid md:grid-cols-2 gap-6'>
							{CONTENT.SKILLS.map((SKILL, i) => (
								<Skill
									className={cn`opacity-0 ${inView && 'animate-from-left-sm'}`}
									title={SKILL.TITLE}
									content={SKILL.CONTENT}
									style={{
										animationDelay: `${i * 75 + 200}ms`,
										order: !!windowWidth /** !!windowWidth => Fix for SSR */ || windowWidth <= 768 ? i : reoderSkills(i)
									}}
									key={`skill-${SKILL.TITLE}`}
								/>
							))}
						</ul>
					)}
				</InView>
			</div>
		</div>
	)
}

function reoderSkills(i: number) {
	return i < (CONTENT.SKILLS.length / 2) ? (i * 2) + 1 : 2 * (i - Math.ceil(CONTENT.SKILLS.length / 2)) + 1
}