import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { iContactsReturn, iUserReturn } from "../../interfaces/user.interface"
import { CardContacts } from "../contactsCard/contactsCard.components"
import { StyledCardList } from "./styles"
import {BiEdit} from "react-icons/bi"
import {AiOutlineUserDelete} from "react-icons/ai" 
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {MdExpandMore} from "react-icons/md"



export const CardUser = (props: iUserReturn) => {
    const {editModalOpen, deleteModalOpen, createContactModalOpen} = useContext(UserContext)
    const { id ,name, email, phone, contacts} = props

    const [openContacts, setOpenContacts] = useState(false)

    return (
        <StyledCardList>
            <section className="user_section">
                <div className="user_card_div">
                    <div className="user_card_options_div">
                        <BiEdit className="card_edit_btn" onClick={() => editModalOpen(id)} />
                        <AiOutlineUserDelete className="card_delete_btn" onClick={() => deleteModalOpen(id)} />
                    </div>
                    <div className="user_card_detail_div">
                        <h3>usuario: {name}</h3>
                        <span>email: {email}</span>
                        <span>phone: {phone}</span>
                    </div>
                </div>
                <div className="user_contacts_options_div">
                    <AiOutlineUsergroupAdd onClick={()=>createContactModalOpen(id)} />
                    <MdExpandMore className={openContacts === true ? "cusor_return_contacts" : ""} onClick={()=>setOpenContacts(!openContacts)} />
                </div>
            </section>
            {openContacts === true ? (
                <ul>
                    {contacts.length !== 0 ? (
                        contacts.map((contact: iContactsReturn) => (
                            <CardContacts  key={contact.id} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} createdAt={contact.createdAt} />
                        ))
                    ):(
                        <div>
                            <span>Vamos cadastrar um novo contato para este usuario? </span>
                            <AiOutlineUsergroupAdd onClick={()=>createContactModalOpen(id)} />
                        </div>
                    )
                    }
                </ul>
            ):(
                <></>
            )} 
            
        </StyledCardList>
    )
}