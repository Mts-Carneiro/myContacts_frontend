import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iUserRegister } from "../../../interfaces/user.interface";


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


export const ModalCreateUser = () => {
    const {modalIsOpen, setModal, createNewUser, loadUsers} = useContext(UserContext)

    const {register, handleSubmit} = useForm<iUserRegister>()

    const submit =async (data: any) => {
        createNewUser(data)
        setModal(false)
        loadUsers()
    }

    return(
        <div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h3>Cadastro de novo cliente</h3>
                    <span onClick={() => setModal(false)}>x</span>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <h3>
                        Nome do usuario:    
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
                    <button type="submit">cadastrar</button>
                </form>
            </Modal>
        </div>
    )
}
