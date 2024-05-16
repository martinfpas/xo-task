export interface User {
    id: number,
    name: string,
    email: string
}

export interface Project {
    id: number,
    name: string,
    description: string,
    owner: User
}

export interface ProjectsListStateType {
    called?: boolean,
    list: Project[],
    error?: string,
    isLoading: boolean
};

export interface UsersListStateType {
    called?: boolean,
    list: User[],
    error?: string,
    isLoading: boolean
};
