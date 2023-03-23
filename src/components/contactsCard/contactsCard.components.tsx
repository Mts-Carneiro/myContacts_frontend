import { iContactsReturn } from "../../interfaces/user.interface"



export const CardContacts = (props: iContactsReturn) => {
    const {name, email, phone} = props
    return (
        <li>
            <div>
                <h3>nome: {name}</h3>
                <span>email: {email}</span>
                <span>phone: {phone}</span>
            </div>
            <div>
                <button>editar</button>
                <button>delete</button>
            </div>
        </li>
    )
}