import { useWindowWidth } from '@react-hook/window-size'
import { SectionHeader } from 'src/components/SectionHeader'
import { Skill } from 'src/components/Skill'
import { CONTENT } from 'src/config'
import { SECTION_ID } from 'src/types'



export const Skills = () => {

	const windowWidth = useWindowWidth()


	return (
		<div className='pb-16' id={SECTION_ID.SKILLS}>
			<div className='container'>

				<SectionHeader className='pt-16 md:pt-24 pb-6 md:pb-10'>
					Technical skills
				</SectionHeader>

				<ul className='grid md:grid-cols-2 gap-6'>
					{CONTENT.SKILLS.map((SKILL, i) => (
						<Skill
							title={SKILL.TITLE}
							content={SKILL.CONTENT}
							style={{ order: !!windowWidth /** !!windowWidth => Fix for SSR */ || windowWidth <= 768 ? i : reoderSkills(i) }}
							key={`skill-${SKILL.TITLE}`}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

function reoderSkills(i: number) {
	return i < (CONTENT.SKILLS.length / 2) ? (i * 2) + 1 : 2 * (i - Math.ceil(CONTENT.SKILLS.length / 2)) + 1
}