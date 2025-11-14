import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-2xl font-semibold">BeautyParlour</Link>
<nav className="space-x-4">
<NavLink to="/" end className={({isActive}) => isActive ? 'text-pink-600 font-medium' : ''}>Home</NavLink>
<NavLink to="/services" className={({isActive}) => isActive ? 'text-pink-600 font-medium' : ''}>Services</NavLink>
<NavLink to="/gallery" className={({isActive}) => isActive ? 'text-pink-600 font-medium' : ''}>Gallery</NavLink>
<NavLink to="/booking" className={({isActive}) => isActive ? 'text-pink-600 font-medium' : ''}>Book</NavLink>
<NavLink to="/admin" className={({isActive}) => isActive ? 'text-pink-600 font-medium' : ''}>Admin</NavLink>
</nav>
</div>
</header>
)
}