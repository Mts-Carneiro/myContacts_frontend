import { createContext, useEffect, useState } from "react";
import { iContactsReturn, iUserRegister } from "../interfaces/user.interface";
import api from "../service/api"


interface iContactContextProps {
    children: React.ReactNode;
  }

interface iContactContext{
    contacts: iContactsReturn[]
    setContacts: React.Dispatch<React.SetStateAction<iContactsReturn[]>>
    contactsFiltered: iContactsReturn[]
    setContactsFiltered: React.Dispatch<React.SetStateAction<iContactsReturn[]>>
    filtered: string
    setFiltered: React.Dispatch<React.SetStateAction<string>>
    modalIsOpen: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modalEditIsOpen: boolean
    setModalEditIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalDeletIsOpen: boolean
    setModalDeletIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    contactMod: iUserRegister | undefined
    setContactMod: React.Dispatch<React.SetStateAction<iUserRegister | undefined>>
    contactModID: string
    setContactModID: React.Dispatch<React.SetStateAction<string>>
    loadContacts(): Promise<void>
    updateContact: (data: iUserRegister) => Promise<void>
    deleteContact: (id: string) => Promise<void>
    filterContacts: (filter: string) => void
    editModalOpen: (id: string) => Promise<void>
    deleteModalOpen: (id: string) => Promise<void>
}

export const ContactContext = createContext({} as iContactContext)

const ContactProvider = ({children}: iContactContextProps) => {
    const [contacts, setContacts] = useState([] as iContactsReturn[])
    const [contactsFiltered, setContactsFiltered] = useState([] as iContactsReturn[])
    const [filtered, setFiltered] = useState("")


    const [modalIsOpen, setModal] = useState(false)
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [modalDeletIsOpen, setModalDeletIsOpen] = useState(false);

    const [contactMod, setContactMod] = useState<iUserRegister>();
    const [contactModID, setContactModID] = useState<string>("");
    

    
    async function loadContacts() {
        try{
            const response = await api.get('contact')
            setContacts(response.data)
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect (() => {
        loadContacts()
    }, [])


    const updateContact = async (data: iUserRegister) => {
        try{
            await api.patch(`contact/${contactModID}`, data)
            loadContacts()
        }catch(error){
            console.log(error)
        }
    }

    const deleteContact =async (id:string) => {
        try{
            await api.delete(`contact/${id}`)
            loadContacts()
            setModalDeletIsOpen(false)
        }catch(error){
            console.log(error)
        }
    }


    const filterContacts = (filter: string) => {
        setContactsFiltered(
          contacts.filter(
            (contact) =>
              contact.name
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase()) ||
              contact.phone
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
          )
        );
    };

    const editModalOpen = async (id: string) => {
        setContactModID(id)
        setModalEditIsOpen(true);
      };

    const deleteModalOpen =async (id: string) => {
        setContactModID(id)
        setModalDeletIsOpen(true)
    }

    return (
        <ContactContext.Provider 
            value={{
                contacts,
                setContacts,
                modalIsOpen,
                setModal, 
                loadContacts,
                contactsFiltered, 
                setContactsFiltered,
                filtered,
                setFiltered,
                updateContact,
                contactMod, 
                setContactMod,
                contactModID, 
                setContactModID,
                modalEditIsOpen, 
                setModalEditIsOpen,
                editModalOpen,
                modalDeletIsOpen,
                setModalDeletIsOpen,
                deleteContact,
                deleteModalOpen,
                filterContacts
            }}
        >
            {children}
        </ContactContext.Provider>
    )
}


export default ContactProvider

