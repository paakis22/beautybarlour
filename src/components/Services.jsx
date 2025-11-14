import React from 'react'
import { services } from '../data/services'


export default function Services(){
return (
<section>
<h2 className="text-2xl font-semibold mb-4">Popular Services</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{services.map(s => (
	<article key={s.id} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
		<img src={s.img} alt={s.title} className="w-40 h-48 object-cover rounded-xl mb-3 border-2 border-pink-300 shadow" />
		<h3 className="font-medium text-lg text-pink-700 mb-1">{s.title}</h3>
		<p className="text-sm text-gray-500 text-center mb-2">{s.desc}</p>
		<div className="mt-auto w-full flex items-center justify-between">
			{/* <span className="text-pink-600 font-semibold">Rs {s.price}</span> */}
			<span className="text-xs text-gray-400">{s.duration}</span>
		</div>
	</article>
))}
</div>
</section>
)
}