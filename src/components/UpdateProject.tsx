import { useNavigate, useParams } from "react-router-dom"
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType, ProjectsListStateType } from "../types/types";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjects, initialListState } from "../redux/reducers/projectSlice";
import Button from "@mui/material/Button";

export const UpdateProject = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const projects: ProjectsListStateType = useSelector<ProjectsListStateType>(state => { return state.projects || initialListState });

    console.log("projects", projects);

    useEffect(() => {
        if (!projects.called) {
            dispatch(fetchProjects());
        }
    }, [projects]);

    const currentProject = projects?.list?.find(project => project.id == id);

    const handleSubmit = (params: ProjectType) => {
        console.log(params);
    }

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
        <Stack >
            <Stack direction={"row"} spacing={2}>
                <Stack justifyContent={"center"}>
                    <Button size="small" variant="contained" onClick={() => navigate("/")}>Home</Button>
                </Stack>
                <Stack>
                    <h1>Edit Project #{id}</h1>
                </Stack>
            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <ProjectForm handleSubmitCallback={handleSubmit} project={currentProject} />
        </Stack>
    </Stack>
}
