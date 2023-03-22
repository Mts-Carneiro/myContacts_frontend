import { createContext, useEffect, useState } from "react";
import { iUserReturn } from "../interfaces/user.interface";
import api from "../service/api"


interface iUserContextProps {
    children: React.ReactNode;
  }

interface iUserContext{
    users: iUserReturn[]
}

export const UserContext = createContext({} as iUserContext)

const UserProvider = ({children}: iUserContextProps) => {
    const [users, setUsers] = useState([] as iUserReturn[])


    useEffect(() => {
        async function loadUsers() {
            try{
                const response = await api.get('/user')
                setUsers(response.data)
            } catch(error){
                console.log(error)
            }
        }
        loadUsers()

    }, [])

    return (
        <UserContext.Provider 
            value={{
                users
            }}
        >
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider