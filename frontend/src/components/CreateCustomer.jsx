
import React, { useState } from 'react'

function CreateCustomer() {
    const [formData, setFormData] = useState({
        first_name: "", last_name: "", email: "", city: "", state: ""
    })

  return (
    <div>
        <h1>Create Customer</h1>
        <form >
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" value={formData.first_name} 
                onChange={(event)=> setFormData({...formData, first_name: event.target.value})} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" value={formData.last_name} 
                onChange={(event)=> setFormData({...formData, last_name: event.target.value})} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value={formData.email} 
                onChange={(event)=> setFormData({...formData, email: event.target.value})} />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" value={formData.city} 
                onChange={(event)=> setFormData({...formData, city: event.target.value})} />
            </div>
            <div>
                <label htmlFor="state">State</label>
                <input type="text" value={formData.state} 
                onChange={(event)=> setFormData({...formData, state: event.target.value})} />
            </div>
            <button>Create Customer</button>
        </form>
    </div>
  )
}

export default CreateCustomer