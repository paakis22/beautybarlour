import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/bgg.jpg'



export default function HomeHero() {
	return (
		<section className="relative bg-gradient-to-br from-pink-200 via-pink-50 to-white rounded-3xl p-10 mb-10 shadow-lg overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-white/0 pointer-events-none" />
			<div className="relative z-10">
				<div className="relative w-full h-80 md:h-96">
					<img
						src={heroImg}
						alt="Beauty Salon Hero"
						className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-pink-200"
					/>

					{/* subtle gradient for better text contrast */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

					{/* overlay text on the image (aligned top-right) */}
					<div className="absolute inset-0 flex flex-col justify-start items-end p-6 md:p-12 text-white">
						<h1 className="text-3xl md:text-5xl font-extrabold mb-8 drop-shadow-lg text-right">Welcome to BeautyParlour</h1>
						<p className="mb-4 text-sm md:text-lg text-white/90 max-w-lg text-right">Relax and let our professionals take care of your beauty needs. Experience luxury and comfort in every service.</p>
						<Link to="/booking" className="mt-2 inline-block bg-pink-600 hover:bg-pink-800 transition text-white px-6 py-3 rounded-full shadow-md font-semibold">Book Now</Link>
					</div>

					
				</div>
			</div>
		</section>
	);
}