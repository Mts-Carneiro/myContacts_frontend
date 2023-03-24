import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import ReactModal from 'react-modal';
import StyledHeader from "./styled";
import {IoIosSearch} from "react-icons/io"
import { StyledTitle } from "../../styles/typography";


export const Header = () => {
    ReactModal.setAppElement("#root");
    const {setModal, setFiltered, filtered, filterUsers } = useContext(UserContext)
    return(
        <StyledHeader>
            <div>
                <StyledTitle tag="h1" className="title_app" color="#4e5861" height={25} size={55}>MyContacts App</StyledTitle>
                <StyledTitle tag="h3" color="#fff" size={14}>Meu app de gerenciamento de contatos</StyledTitle>
            </div>
            <div className="interacts_bar">
                <button className="create_client_btn" onClick={() => setModal(true)}>Cadastrar usuario</button>
                <div className="search_div">
                    <input 
                        className="search_bar"
                        type="text" 
                        placeholder="Buscar usuario"
                        onChange={(e)=> setFiltered(e.currentTarget.value)}
                    />
                    <IoIosSearch className="search_icon" onClick={() => filterUsers(filtered)} />
                </div>
            </div>
        </StyledHeader>
    )
}