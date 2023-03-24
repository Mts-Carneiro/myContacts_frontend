import { ReactNode } from "react";
import ContactProvider from "./contact.context";
import UserProvider from "./user.context";


interface iProvider {
    children: ReactNode;
}


export const Provider = ({children}: iProvider) => {
    return(
        <UserProvider>
            <ContactProvider>
                {children}  
            </ContactProvider>
        </UserProvider>
    )
}