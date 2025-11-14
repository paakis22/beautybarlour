import React from 'react'


export default function AdminDashboard(){
// Simple placeholder. In a real app you will connect to an API and show bookings, staff schedule, etc.
return (
<div>
<h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
<p className="mb-2">This is a simple admin page — connect to your backend to manage bookings and services.</p>
<div className="bg-white p-4 rounded shadow">No bookings yet (demo).</div>
</div>
)
}