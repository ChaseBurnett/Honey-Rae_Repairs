import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeList } from "../Employees/EmployeeList"
import { TicketForm } from "../tickets/TicketForm"
import { TicketContainer } from "../tickets/TicketsContainer"
import { CustomerList } from "../Customers/CustomerList"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="customers" element={ <CustomerList />} />
            </Route>
        </Routes>
    )
}