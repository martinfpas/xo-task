export interface User {
    id:Number,
    name:String,
    email:String
}

export interface Project {
    id: Number,
    name: String,
    description: String,
    owner: User
}

export interface ProjectsListStateType {
    list:Project[],
    error?:string,
    isLoading:boolean
};