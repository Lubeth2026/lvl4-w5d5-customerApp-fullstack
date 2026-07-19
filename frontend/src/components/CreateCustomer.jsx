
import React, { useState } from 'react'

function CreateCustomer() {
    const [formData, setFormData] = useState({
        first_name: "", last_name: "", email: "", city: "", state: ""
    })
    const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://lvl4-w5d5-customerapp-fullstack.onrender.com/api/customers",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              },
            );
            const data = await response.json();
            console.log(data)
            setSuccessMessage("Customer created successfully");
            setFormData({
                first_name: "", last_name: "", email: "", city: "", state: ""
            });
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="create-container">
        <h1>Create Customer</h1>
        {successMessage && (
            <p className="success-message">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="customer-form" >
            <div className="form-group" >
                <label htmlFor="first_name">First Name</label>
                <input type="text" value={formData.first_name} 
                onChange={(event)=> setFormData({...formData, first_name: event.target.value})} />
            </div>
            <div className="form-group" >
                <label htmlFor="last_name">Last Name</label>
                <input type="text" value={formData.last_name} 
                onChange={(event)=> setFormData({...formData, last_name: event.target.value})} />
            </div>
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" value={formData.email} 
                onChange={(event)=> setFormData({...formData, email: event.target.value})} />
            </div>
            <div className="form-group" >
                <label htmlFor="city">City</label>
                <input type="text" value={formData.city} 
                onChange={(event)=> setFormData({...formData, city: event.target.value})} />
            </div>
            <div className="form-group" >
                <label htmlFor="state">State</label>
                <input type="text" value={formData.state} 
                onChange={(event)=> setFormData({...formData, state: event.target.value})} />
            </div>
            <button type="submit" className="create-button" >Create Customer</button>
        </form>
    </div>
  )
}

export default CreateCustomer