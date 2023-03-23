import { ReactNode } from "react";
import UserProvider from "./user.context";


interface iProvider {
    children: ReactNode;
}


export const Provider = ({children}: iProvider) => {
    return(
        <UserProvider>
            {children}
        </UserProvider>
    )
}