import { useContext } from "react";
import Modal from "react-modal";
import { ContactContext } from "../../../contexts/contact.context";
import { DivDeleteModal } from "../styles";


const customStyles = {
    content: {
      width: "45%",
      maxWidth: "450px",
      height: "auto",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      padding: "10px"
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
                <DivDeleteModal>
                    <h3>Deseja realmente apagar este usuario?</h3>
                    <div className="div_delete_choice">
                        <button className="delete_yes" onClick={() => deleteContact(contactModID)}>Sim</button>
                        <button className="delete_not" onClick={() => setModalDeletIsOpen(false)}>Não</button>
                    </div>
                </DivDeleteModal>                
            </Modal>
        </div>
    )
}
