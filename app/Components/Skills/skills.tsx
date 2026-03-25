import React from 'react'
import Card from './card'


function Skills() {
    return (
		<section id="skills" className="min-h-screen scroll-mt-24 pb-20">
			<h1 className="text-3xl font-bold text-center">Skills</h1>
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