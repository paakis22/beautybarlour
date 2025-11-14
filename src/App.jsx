
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import BookingPage from './pages/BookingPage'
import AdminDashboard from './pages/AdminDashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Header />


<main className="flex-1 container mx-auto px-4 py-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<ServicesPage />} />
<Route path="/booking" element={<BookingPage />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/gallery" element={<GalleryPage />} />
</Routes>
</main>


<Footer />
</div>
)
}