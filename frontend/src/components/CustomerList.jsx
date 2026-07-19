
import React, { useEffect, useState } from 'react'

function CustomerList() {

  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    try {
      const response = await fetch("https://lvl4-w5d5-customerapp-fullstack.onrender.com/api/customers");
      const data = await response.json();
      setCustomers(data.customers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getCustomers();
  }, [])

  async function deleteCustomer(customerId) {
    try {
      const response = await fetch(
        `https://lvl4-w5d5-customerapp-fullstack.onrender.com/api/customers/${customerId}`,
        {
          method: "DELETE",
        },
      );
      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        getCustomers();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="list-container">
        <h1>Customer History</h1>
        {customers.map((customer)=> (
          <div key={customer.id}className="customer-card" >
            <h2>{customer.first_name} {customer.last_name}</h2>
            <p>{customer.email}</p>
            <p>{customer.city} {customer.state}</p>

            <button onClick={()=> deleteCustomer(customer.id)}>🗑️</button>
          </div>
        ))}
    </div>
  )
}

export default CustomerList