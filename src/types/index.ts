export interface AppStoreState {
    users: User[];
}

export interface User {
    id: string,
    name: string,
    surname: string
}