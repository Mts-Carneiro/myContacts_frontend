import { ContactContext } from "../../contexts/contact.context"
import { iContactsReturn } from "../../interfaces/user.interface"
import { useContext } from "react"



export const CardContacts = (props: iContactsReturn) => {

    const {editModalOpen, deleteModalOpen} = useContext(ContactContext)

    const {id, name, email, phone} = props
    return (
        <li>
            <div>
                <h3>nome: {name}</h3>
                <span>email: {email}</span>
                <span>phone: {phone}</span>
            </div>
            <div>
                <button onClick={() => editModalOpen(id)}>editar</button>
                <button onClick={() => deleteModalOpen(id)}>delete</button>
            </div>
        </li>
    )
}