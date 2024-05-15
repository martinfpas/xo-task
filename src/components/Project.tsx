import { useDispatch, useSelector } from "react-redux"
import { add, fetchProjects } from "../redux/reducers/projectSlice";
import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { ProjectsListStateType } from "../types/types";

export const ProjectList = () => {
    const projectsListState: ProjectsListStateType = useSelector<{ projects: ProjectsListStateType }>(state => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, []);

    return <Stack alignItems={"baseline"} justifyContent={"center"} bgcolor={"red"} direction={"column"}>
        <Stack bgcolor={"blue"}>
            <h1>Project List</h1>
        </Stack>

        <Stack bgcolor={"green"} width={"100%"} >
            <h2>{projectsListState?.list?.length}</h2>
            <Button onClick={() => { dispatch(add()) }}>x</Button>
            <Stack>{projectsListState.error}</Stack>
        </Stack>
    </Stack>
}