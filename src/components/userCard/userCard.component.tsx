import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { iContactsReturn, iUserReturn } from "../../interfaces/user.interface"
import { CardContacts } from "../contactsCard/contactsCard.components"



export const CardUser = (props: iUserReturn) => {
    const {editModalOpen, deleteModalOpen, createContactModalOpen} = useContext(UserContext)
    const { id ,name, email, phone, contacts} = props

    const [openContacts, setOpenContacts] = useState(false)

    return (
        <li>
            <div>
                <div>
                    <h3>usuario: {name}</h3>
                    <span>email: {email}</span>
                    <span>phone: {phone}</span>
                </div>
                <div>
                    <button onClick={() => editModalOpen(id)}>editar</button>
                    <button onClick={() => deleteModalOpen(id)}>apagar</button>
                </div>
            </div>
            <div>
                <button onClick={()=>setOpenContacts(!openContacts)}>contatos</button>
                <button onClick={()=>createContactModalOpen(id)}>Novo contato</button>
            </div>
            {openContacts === true ? (
                <ul>
                    {contacts.length !== 0 ? (
                        contacts.map((contact: iContactsReturn) => (
                            <CardContacts  key={contact.id} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} createdAt={contact.createdAt} />
                        ))
                    ):(
                        <div>
                            <span>Vamos cadastrar um novo contato para este usuario?</span>
                            <button onClick={()=>createContactModalOpen(id)}>Cadastrar novo contato</button>
                        </div>
                    )
                    }
                </ul>
            ):(
                <></>
            )} 
            
        </li>
    )
}