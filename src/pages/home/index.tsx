import { Header } from "../../components/header/header.componet"
import { ListUser } from "../../components/listusers/userList.component"
import { ModalCreateContact } from "../../components/modal/contactsModal/createContactModal"
import { ModalDeleteContact } from "../../components/modal/contactsModal/deleteContactModal"
import { ModalUpdateContact } from "../../components/modal/contactsModal/editContactModal"
import { ModalCreateUser } from "../../components/modal/userModal/createUserModal"
import { ModalDeleteUser } from "../../components/modal/userModal/deleteuserModal"
import { ModalUpdateUser } from "../../components/modal/userModal/editUserModal"


export const Dashboard = () => {
    return (
        <>  
            <ModalDeleteUser></ModalDeleteUser>
            <ModalUpdateUser></ModalUpdateUser>
            <ModalCreateUser></ModalCreateUser>
            <ModalCreateContact></ModalCreateContact>
            <ModalUpdateContact></ModalUpdateContact>
            <ModalDeleteContact></ModalDeleteContact>
            <Header />
            <ListUser />
        </>
    )
} 