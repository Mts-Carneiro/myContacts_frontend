import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iUserRegister } from "../../../interfaces/user.interface";
import { ContactContext } from "../../../contexts/contact.context";
import { UserContext } from "../../../contexts/user.context";


const customStyles = {
    content: {
      width: "380px",
      height: "auto",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };


export const ModalUpdateContact = () => {
    const {modalEditIsOpen, setModalEditIsOpen, updateContact, loadContacts} = useContext(ContactContext)
    const {loadUsers} = useContext(UserContext)

    const {register, handleSubmit} = useForm<iUserRegister>()

    const submit =async (data: any) => {
        updateContact(data)
        loadUsers()
        loadContacts()
        setModalEditIsOpen(false)
    }

    return(
        <div>
            <Modal 
                isOpen={modalEditIsOpen}
                onRequestClose={() => setModalEditIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h3>Atualização cadastral do cliente</h3>
                    <span onClick={() => setModalEditIsOpen(false)}>x</span>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <h3>
                        Nome do contato:    
                    </h3>
                    <input 
                        id="name"
                        placeholder="Nome completo"
                        {...register("name")}
                    >
                    </input> 
                    <h3>
                        Email:    
                    </h3>
                    <input 
                        id="email"
                        placeholder="E-mail do usuario"
                        {...register("email")}
                    >
                    </input> 
                    <h3>
                        Numero para contato:    
                    </h3>
                    <input 
                        id="phone"
                        placeholder="999999999"
                        {...register("phone")}
                    >
                    </input> 
                    <button type="submit">Atualizar</button>
                </form>
            </Modal>
        </div>
    )
}
