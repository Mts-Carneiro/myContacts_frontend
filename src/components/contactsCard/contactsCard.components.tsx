import { ContactContext } from "../../contexts/contact.context"
import { iContactsReturn } from "../../interfaces/user.interface"
import { useContext } from "react"
import {AiOutlineUsergroupDelete} from "react-icons/ai"
import {TbEdit} from "react-icons/tb"
import { StyledCardContact } from "./styles"



export const CardContacts = (props: iContactsReturn) => {

    const {editModalOpen, deleteModalOpen} = useContext(ContactContext)

    const {id, name, email, phone} = props
    return (
        <StyledCardContact>
            <div className="contact_card_detail_div">
                <h3>nome: {name}</h3>
                <span>email: {email}</span>
                <span>phone: {phone}</span>
            </div>
            <div className="contact_option_div">
                <TbEdit className="contact_card_edit_btn" onClick={() => editModalOpen(id)} />
                <AiOutlineUsergroupDelete className="contact_card_delete_btn" onClick={() => deleteModalOpen(id)} />
            </div>
        </StyledCardContact>
    )
}