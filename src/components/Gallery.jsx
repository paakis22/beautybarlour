
import React from 'react'
import B1 from '../assets/B1.jpg'
import B2 from '../assets/B2.jpg'
import B3 from '../assets/B3.jpg'
import B4 from '../assets/B4.jpg'
import b5 from '../assets/b5.jpg'

export const images = [
	// Makeup service related images
	B1, // Makeup application
	B2, // Bridal makeup
	B3, // Eye makeup
	B4, // Makeup tools
	b5, // Professional makeup
];

// Props:
// - limit: number (optional) -> show only first N images (used on Home)
// - onImageClick: function(index) (optional) -> called when an image is clicked
export default function Gallery({ limit, onImageClick }){
	const list = typeof limit === 'number' ? images.slice(0, limit) : images

	return (
		<section className="bg-pink-50 rounded-2xl p-6 shadow mb-8">
			<h3 className="text-2xl font-bold mb-5 text-pink-700 text-center tracking-wide">Bride Gallery</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
				{list.map((src, i) => (
					<div
						key={i}
						onClick={() => onImageClick && onImageClick(i)}
						role={onImageClick ? 'button' : undefined}
						tabIndex={onImageClick ? 0 : undefined}
						onKeyDown={(e) => { if (onImageClick && (e.key === 'Enter' || e.key === ' ')) onImageClick(i) }}
						className="h-96 bg-cover bg-center rounded-xl shadow-md border-2 border-pink-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
						style={{ backgroundImage: `url('${src}')` }}
					/>
				))}
			</div>
		</section>
	)
}