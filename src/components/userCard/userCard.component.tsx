import { iUserReturn } from "../../interfaces/user.interface"
import { CardContacts } from "../contactsCard/contactsCard.components"



export const CardUser = (userData: iUserReturn) => {
    return (
        <li>
            <h3>usuario: {userData.name}</h3>
            <span>email: {userData.email}</span>
            <span>phone: {userData.phone}</span>
            <ul>
                <CardContacts />
            </ul>
        </li>
    )
}