import { Header } from "../../components/header/header.componet"
import { ListUser } from "../../components/listusers/userList.component"
import { ModalCreateUser } from "../../components/modal/userModal/createUserModal"
import { ModalUpdateUser } from "../../components/modal/userModal/editUserModal"


export const Dashboard = () => {
    return (
        <>  
            <ModalUpdateUser></ModalUpdateUser>
            <ModalCreateUser></ModalCreateUser>
            <Header />
            <ListUser />
        </>
    )
} 