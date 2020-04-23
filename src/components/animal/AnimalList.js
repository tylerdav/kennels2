import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import AnimalForm from "./AnimalForm"
import Animal from "./Animal"
import "./Animals.css"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Animals</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("kennel_customer")
                if (userId) {
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make Appointment</Button>
            <div className="animals">
                {

                    animals.map(animal => {
                        const clinic = locations.find(l => l.id === animal.locationId)
                        const owner = customers.find(c => c.id === animal.customerId)

                        return <Animal key={animal.id}
                            location={clinic}
                            customer={owner}
                            animal={animal} />
                    })
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Admit an Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}