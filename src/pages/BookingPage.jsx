import React from 'react'
import BookingForm from '../components/BookingForm'


export default function BookingPage(){
return (
<div className="grid md:grid-cols-2 gap-6">
<div>
<h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
<p className="mb-4">Choose a service and preferred time. We'll confirm your booking by phone.</p>
</div>
<div>
<BookingForm />
</div>
</div>
)
}