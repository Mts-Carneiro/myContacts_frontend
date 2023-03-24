import { useContext } from "react"
import {UserContext} from "../../contexts/user.context"
import { iUserReturn } from "../../interfaces/user.interface"
import { CardUser } from "../userCard/userCard.component"
import StyledList from "./styles"



export const ListUser = () => {

    const { users, usersFiltered, filtered} = useContext(UserContext)
    
    return (
        <>
            {users.length !== 0 ? (
                <StyledList>
                    {filtered.length === 0 ? (
                        users.map((user: iUserReturn) => (
                            <CardUser key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} createdAt={user.createdAt} contacts={user.contacts} />
                        ))                    
                    ):( usersFiltered.length !== 0 ? (
                            usersFiltered.map((user: iUserReturn) => (
                                <CardUser key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} createdAt={user.createdAt} contacts={user.contacts} />))
                            ):(
                                <h3>Não encontramos nenhum usuario com este nome</h3>
                            )
                       )
                    }  
                </StyledList>
            ):(
                <h3>Você ainda não tem nenum cliente cadastrado.</h3>
            )
            }   
        </>
    )
}