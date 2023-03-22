

export interface iUserRegister {
    name: string
    email: string
    phone: number
}

export interface iContactsReturn {
    name: string
    email: string
    phone: number
    createdAt: Date
}

export interface iUserReturn {
    id: string
    name: string
    email: string
    phone: number
    createdAt: Date
    contacts: []
}

