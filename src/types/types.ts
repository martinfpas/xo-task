export interface User {
    id: Number,
    name: String,
    email: String
}

export interface Project {
    id: Number,
    name: String,
    description: String,
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
