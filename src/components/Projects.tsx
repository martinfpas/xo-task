import { useDispatch, useSelector } from "react-redux"
import { add, fetchProjects } from "../redux/reducers/projectSlice";
import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { ProjectsListStateType } from "../types/types";
import { ProjectList } from "./ProjectList";
import { useNavigate } from "react-router-dom";


export const Projects = () => {
    const projectsListState: ProjectsListStateType = useSelector<{ projects: ProjectsListStateType }>(state => state.projects);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProjects());
    }, []);

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
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