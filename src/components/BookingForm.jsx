import React, { useState } from 'react'
import { services } from '../data/services'


export default function BookingForm(){
const [form, setForm] = useState({ name: '', phone: '', serviceId: services[0].id, date: '', time: '' })
const [success, setSuccess] = useState(null)


function handleChange(e){
setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
}


function handleSubmit(e){
e.preventDefault()
// For a real app: send to backend. Here we simulate success.
setSuccess(`Booking confirmed for ${form.name} — ${services.find(s=>s.id===form.serviceId).title} on ${form.date} at ${form.time}`)
setForm({ name: '', phone: '', serviceId: services[0].id, date: '', time: '' })
}


return (
<div className="max-w-md bg-white p-6 rounded-lg shadow">
<h3 className="text-xl font-semibold mb-4">Make a Booking</h3>
<form onSubmit={handleSubmit} className="space-y-3">
<input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full border px-3 py-2 rounded" />
<input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="w-full border px-3 py-2 rounded" />
<select name="serviceId" value={form.serviceId} onChange={handleChange} className="w-full border px-3 py-2 rounded">
{services.map(s => <option key={s.id} value={s.id}>{s.title} — Rs {s.price}</option>)}
</select>
<div className="grid grid-cols-2 gap-2">
<input type="date" name="date" value={form.date} onChange={handleChange} className="border px-3 py-2 rounded" required />
<input type="time" name="time" value={form.time} onChange={handleChange} className="border px-3 py-2 rounded" required />
</div>
<button className="w-full bg-pink-600 text-white py-2 rounded">Confirm Booking</button>
</form>


{success && <div className="mt-4 p-3 bg-green-50 text-green-800 rounded">{success}</div>}
</div>
)
}