
export interface GoogleUser {
    name?: string
    picture?: string
}

export interface Tenant extends GoogleUser {
    id?: number
    email: string
    session_id: string
}

