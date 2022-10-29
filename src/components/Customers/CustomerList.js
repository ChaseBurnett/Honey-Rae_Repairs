import { useEffect, useState } from "react"
import "./Customers.css"

export const CustomerList = () => {
    
    const [customers, setCustomers] = useState([])

    useEffect(
       () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
            .then(response => response.json())
            .then((customerArray)=> {
                setCustomers(customerArray)
            })
       },
       []
    )

    return <article className="customers">
        {
            customers.map(customer => {
                return <section className="customer" key={`customer--${customer.id}`}>
                    <div>Name: {customer.user.fullName}</div>
                    <div>Email: {customer.user.email}</div>
                    <div>Phone: {customer.phoneNumber}</div>
                    <div>Address: {customer.address}</div>
                </section>
            })
        }
    </article>
}