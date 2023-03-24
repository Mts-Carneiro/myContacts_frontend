import { useContext } from "react";
import Modal from "react-modal";
import { ContactContext } from "../../../contexts/contact.context";



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


export const ModalDeleteContact = () => {
    const { modalDeletIsOpen, setModalDeletIsOpen, deleteContact, contactModID} = useContext(ContactContext)

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
                    <button onClick={() => deleteContact(contactModID)}>Sim</button>
                    <button onClick={() => setModalDeletIsOpen(false)}>Não</button>
                </div>
                
            </Modal>
        </div>
    )
}
