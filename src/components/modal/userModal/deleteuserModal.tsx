import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import Modal from "react-modal";



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


export const ModalDeleteUser = () => {
    const { modalDeletIsOpen, setModalDeletIsOpen, userModID, deleteUser } = useContext(UserContext)

    return(
        <div>
            <Modal 
                isOpen={modalDeletIsOpen}
                onRequestClose={() => setModalDeletIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Deseja realmente apagar este usuario?</h3>
                <div>
                    <button onClick={() => deleteUser(userModID)}>Sim</button>
                    <button onClick={() => setModalDeletIsOpen(false)}>Não</button>
                </div>
                
            </Modal>
        </div>
    )
}
