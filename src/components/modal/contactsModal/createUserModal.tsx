import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iContactRegister, iUserRegister } from "../../../interfaces/user.interface";


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


export const ModalCreateContact = () => {
    const { createNewContact, loadUsers, modalContactIsOpen, setContactModal, contactUserID} = useContext(UserContext)

    const {register, handleSubmit} = useForm<iContactRegister>()

    const submit =async (data: iUserRegister) => {
        const newData = {
            ...data,
            user: contactUserID
        }
        createNewContact(newData)
        loadUsers()
        setContactModal(false)
    }

    return(
        <div>
            <Modal 
                isOpen={modalContactIsOpen}
                onRequestClose={() => setContactModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h3>Cadastro de novo contato</h3>
                    <span onClick={() => setContactModal(false)}>x</span>
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
                        placeholder="E-mail do contato"
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
                    <button type="submit">Adicionar</button>
                </form>
            </Modal>
        </div>
    )
}
