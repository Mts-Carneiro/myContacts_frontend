import { useContext } from "react"
import {UserContext} from "../../contexts/user.context"
import { iUserReturn } from "../../interfaces/user.interface"
import { CardUser } from "../userCard/userCard.component"



export const ListUser = () => {

    const { users, usersFiltered, filtered} = useContext(UserContext)
    
    return (
        <>
            <ul>
                {filtered.length === 0 ? (
                    users.map((user: iUserReturn) => (
                        <CardUser key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} createdAt={user.createdAt} contacts={user.contacts} />
                    ))                    
                ):(
                    usersFiltered.map((user: iUserReturn) => (
                        <CardUser key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} createdAt={user.createdAt} contacts={user.contacts} />
                    ))
                )
                }
            </ul>
        </>
    )
}