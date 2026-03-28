import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import Card from './Card'


function Skills() {
    return (
		<section id="skills" className="min-h-screen scroll-mt-24 pb-20 md:px-10 px-2">
			<SectionHeader title="Skills" />
			<div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6 w-[90%] md:w-960 lg:w-[85%] pt-10 md:pt-15 mx-auto">
				<Card title="Frontend and Backend"/>
				<Card title="Tools"/>
				<Card title="Development Practices"/>
				<Card title="Soft Skills" />
			</div>
		</section>
    )
}

export default Skills