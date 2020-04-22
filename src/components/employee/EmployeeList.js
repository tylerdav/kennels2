import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employees.css"

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </div>
    )
}