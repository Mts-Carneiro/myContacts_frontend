import { createContext, useEffect, useState } from "react";
import { iContactRegister, iUserRegister, iUserReturn } from "../interfaces/user.interface";
import api from "../service/api"


interface iUserContextProps {
    children: React.ReactNode;
  }

interface iUserContext{
    users: iUserReturn[]
    createNewUser: (data: iUserRegister) => void
    modalIsOpen: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modalContactIsOpen: boolean
    setContactModal: React.Dispatch<React.SetStateAction<boolean>>
    loadUsers: () => Promise<void>
    usersFiltered: iUserReturn[]
    setUsersFiltered: React.Dispatch<React.SetStateAction<iUserReturn[]>>
    filtered: string
    setFiltered: React.Dispatch<React.SetStateAction<string>>
    filterUsers: (filter: string) => void
    updateUser: (data: iUserRegister) => Promise<void>
    userMod: iUserRegister | undefined
    setUserMod: React.Dispatch<React.SetStateAction<iUserRegister | undefined>>
    userModID: string
    setUserModID: React.Dispatch<React.SetStateAction<string>>
    modalEditIsOpen: boolean
    setModalEditIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    editModalOpen: (id: string) => Promise<void>
    modalDeletIsOpen: boolean
    setModalDeletIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    deleteUser: (id: string) => Promise<void>
    deleteModalOpen: (id: string) => Promise<void>
    contactUserID: string
    setContactUserModID: React.Dispatch<React.SetStateAction<string>>
    createNewContact: (data: iUserRegister) => Promise<void>
    createContactModalOpen: (id: string) => Promise<void>
}

export const UserContext = createContext({} as iUserContext)

const UserProvider = ({children}: iUserContextProps) => {
    const [users, setUsers] = useState([] as iUserReturn[])
    const [usersFiltered, setUsersFiltered] = useState([] as iUserReturn[])
    const [filtered, setFiltered] = useState("")


    const [modalIsOpen, setModal] = useState(false)
    const [modalContactIsOpen, setContactModal] = useState(false)
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [modalDeletIsOpen, setModalDeletIsOpen] = useState(false);

    const [userMod, setUserMod] = useState<iUserRegister>();
    const [userModID, setUserModID] = useState<string>("");
    const [contactUserID, setContactUserModID] = useState<string>("");
    

    
    async function loadUsers() {
        try{
            const response = await api.get('user')
            setUsers(response.data)
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect (() => {
        loadUsers()
    }, [])

    

    const createNewUser = async (data: iUserRegister) => {

        try{
            await api.post("user", data)
            loadUsers()
        }catch(error){
            console.log(error)
        }
    }

    const createNewContact = async (data: iContactRegister) => {

        try{
            await api.post("contact", data)
            loadUsers()
        }catch(error){
            console.log(error)
        }
    }

    const updateUser = async (data: iUserRegister) => {
        try{
            await api.patch(`user/${userModID}`, data)
            loadUsers()
        }catch(error){
            console.log(error)
        }
    }

    const deleteUser =async (id:string) => {
        try{
            await api.delete(`user/${id}`)
            loadUsers()
            setModalDeletIsOpen(false)
        }catch(error){
            console.log(error)
        }
    }


    const filterUsers = (filter: string) => {
        setUsersFiltered(
          users.filter(
            (user) =>
              user.name
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase()) ||
              user.phone
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
          )
        );
    };

    const createContactModalOpen = async (id: string) => {
        setContactUserModID(id)
        setContactModal(true);
      };

    const editModalOpen = async (id: string) => {
        setUserModID(id)
        setModalEditIsOpen(true);
      };

    const deleteModalOpen =async (id: string) => {
        setUserModID(id)
        setModalDeletIsOpen(true)
    }

    return (
        <UserContext.Provider 
            value={{
                users,
                createNewUser,
                createNewContact,
                modalIsOpen,
                setModal, 
                loadUsers,
                usersFiltered, 
                setUsersFiltered,
                filtered,
                setFiltered,
                filterUsers,
                updateUser,
                userMod, 
                setUserMod,
                userModID, 
                setUserModID,
                modalEditIsOpen, 
                setModalEditIsOpen,
                editModalOpen,
                modalDeletIsOpen,
                setModalDeletIsOpen,
                deleteUser,
                deleteModalOpen,
                contactUserID,
                setContactUserModID,
                modalContactIsOpen,
                setContactModal,
                createContactModalOpen
            }}
        >
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider

