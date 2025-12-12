import haircut from '../assets/haircut.png';
import im5 from '../assets/im5.jpg';
import im7 from '../assets/im7.jpg';
import pedu from '../assets/pedu.png';
import make from '../assets/make.jpg';
import eye from '../assets/eye.png';
import face from '../assets/face.jpg';
import haircolour from '../assets/haircolour.png';

export const services = [
	{
		id: 'haircut',
		title: 'Haircut & Styling',
		duration: '45 min',
		price: 1200,
		desc: 'Trendy cuts and professional styling.',
		img: haircut,
	},
	{
		id: 'facial',
		title: 'Signature Facial',
		duration: '60 min',
		price: 2500,
		desc: 'Deep cleansing facial for glowing skin.',
		img: im5,
	},
	{
		id: 'manicure',
		title: 'Manicure & Polish',
		duration: '30 min',
		price: 800,
		desc: 'Nails shaping, scrub and polish.',
		img: im7,
	},
	{
		id: 'pedicure',
		title: 'Pedicure & Foot Care',
		duration: '45 min',
		price: 1000,
		desc: 'Relaxing foot massage and nail care.',
		img: pedu,
	},
	{
		id: 'makeup',
		title: 'Professional Makeup',
		duration: '60 min',
		price: 2000,
		desc: 'Bridal and party makeup with premium products.',
		img: make,
	},
	{
		id: 'threading',
		title: 'Threading & Waxing',
		duration: '30 min',
		price: 500,
		desc: 'Hair removal with threading and waxing services.',
		img: eye,
	},
	{
		id: 'goldenfacial',
		title: 'Golden Facial',
		duration: '60 min',
		price: 1500,
		desc: 'Soothing full body massage to relax and rejuvenate.',
		img: face,
	},
	{
		id: 'hairtreatment',
		title: 'Hair Colour',
		duration: '90 min',
		price: 2200,
		desc: 'Protein and keratin treatment for shiny, healthy hair.',
		img: haircolour,
	},
];