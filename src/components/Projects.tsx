import { useDispatch, useSelector } from "react-redux"
import { add, fetchProjects } from "../redux/reducers/projectSlice";
import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { ProjectsListStateType, UsersListStateType } from "../types/types";
import { ProjectList } from "./ProjectList";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../redux/reducers/userSlice";


export const Projects = () => {
    const projectsListState: ProjectsListStateType = useSelector<ProjectsListStateType>(state => state.projects);
    const usersListState: UsersListStateType = useSelector<UsersListStateType>(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!projectsListState.called) {
            dispatch(fetchProjects());
        }
    }, [projectsListState?.called]);

    useEffect(() => {
        if (!usersListState.called) {
            dispatch(fetchUsers());
        }
    }, [usersListState?.called]);

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"} data-testid="Projects">
        <Stack >
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <h1>Project List</h1>
                </Stack>
                <Stack justifyContent={"center"}>
                    <Button size="small" variant="contained" onClick={() => navigate("/project")}>New</Button>
                </Stack>
            </Stack>
        </Stack>

        <Stack width={"100%"} >
            <ProjectList list={projectsListState?.list} />
            <Button onClick={() => { dispatch(add()) }}>x</Button>
        </Stack>
    </Stack>
}