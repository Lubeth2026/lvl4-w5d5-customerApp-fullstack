
import React, { useDebugValue, useEffect, useState } from 'react'

function CustomerList() {

  const [customers, setCustomers] = useState([]);

  useEffect(()=>{
    async function getCustomers() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/customers");
        const data = await response.json();
        setCustomers(data.customers)
      } catch (error) {
        console.log(error)
      }
    }
    getCustomers();
  }, [])

  return (
    <div>
        <h1>Customer History</h1>
        {customers.map((customer)=> (
          <div key={customer.id}>
            <h2>{customer.first_name} {customer.last_name}</h2>
            <p>{customer.email}</p>
            <p>{customer.city} {customer.state}</p>
          </div>
        ))}
    </div>
  )
}

export default CustomerList