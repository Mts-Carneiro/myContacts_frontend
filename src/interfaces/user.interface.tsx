

export interface iUserRegister {
    name: string
    email: string
    phone: string
}

export interface iContactRegister {
    name: string
    email: string
    phone: string
}

export interface iContactsReturn {
    id: string
    name: string
    email: string
    phone: string
    createdAt: string
}

export interface iUserReturn {
    id: string
    name: string
    email: string
    phone: string
    createdAt: string
    contacts: iContactsReturn[]
}

