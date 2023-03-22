import { useEffect, useState } from "react"
//import { UserContext } from "../../contexts/user.context"
import { iUserReturn } from "../../interfaces/user.interface"
import api from "../../service/api"
//import { iUserReturn } from "../../interfaces/user.interface"
//import { CardUser } from "../userCard/userCard.component"



export const ListUser = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            try{
                const response = await api.get("/user");
                setUsers(response.data);
                console.log(users)
            } catch(error){
                console.log(error)
            }
        }
        loadUsers()

    })

    return(
        <>
            <ul>
                <li>teste 1</li>
            </ul>
        </>
    )
}