

export interface iUserRegister {
    name: string
    email: string
    phone: number
}

export interface iContactsReturn {
    id: string
    name: string
    email: string
    phone: number
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

