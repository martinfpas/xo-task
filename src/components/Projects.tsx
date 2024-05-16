import { useDispatch, useSelector } from "react-redux"
import { fetchProjects } from "../redux/reducers/projectSlice";
import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { ProjectList } from "./ProjectList";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";



export const Projects = () => {
    const projectsListState: any = useSelector<RootState>(state => state.projects);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!projectsListState.called) {
            dispatch(fetchProjects());
        }
    }, [projectsListState?.called]);

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"} data-testid="Projects">
        <Stack >
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <h1>Project List</h1>
                </Stack>
                <Stack justifyContent={"center"}>
                    <Button size="medium" variant="contained" onClick={() => navigate("/project")}>New</Button>
                </Stack>
            </Stack>
        </Stack>

        <Stack width={"100%"} >
            <ProjectList list={projectsListState?.list} />
        </Stack>
    </Stack>
}