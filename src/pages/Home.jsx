import React from 'react'
import HomeHero from '../components/HomeHero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'


export default function Home(){
return (
	<div className="space-y-12 md:space-y-16">
		<HomeHero />
		<Services />
		<Gallery limit={4} />
	</div>
)
}