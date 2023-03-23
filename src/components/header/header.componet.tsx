import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import ReactModal from 'react-modal';


export const Header = () => {
    ReactModal.setAppElement("#root");
    const {setModal, setFiltered, filtered, filterUsers } = useContext(UserContext)
    return(
        <div>
            <h1>MyContacts App</h1>
            <h3>Meu app de gerenciamento de contatos</h3>
            <div>
                <button onClick={() => setModal(true)}>Cadastrar usuario</button>
                <input 
                    type="text" 
                    placeholder="Buscar usuario"
                    onChange={(e)=> setFiltered(e.currentTarget.value)}
                />
                <button onClick={() => filterUsers(filtered)}>pesquisar</button>
            </div>
        </div>
    )
}