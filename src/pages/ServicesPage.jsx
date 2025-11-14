import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'


export default function ServicesPage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pink-700 mb-3">Our Premium Services</h1>
          <p className="text-gray-600 text-lg">Experience luxury beauty treatments tailored just for you</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img 
                src={service.img} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-pink-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <div className="flex items-center justify-between mb-4 border-t pt-3">
                  <span className="text-pink-600 font-bold text-lg">Rs {service.price}</span>
                  <span className="text-gray-500 text-sm">{service.duration}</span>
                </div>
                <Link to="/booking" className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition text-center">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}