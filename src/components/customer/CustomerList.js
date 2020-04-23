import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customers.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>
            <div className="customers">
                {
                    customers.map(cus => <Customer key={cus.id} customer={cus} />)
                }
            </div>
        </>
    )
}