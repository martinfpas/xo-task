import { useNavigate, useParams } from "react-router-dom"
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType } from "../types/types";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjects, initialListState, updateProject } from "../redux/reducers/projectSlice";
import Button from "@mui/material/Button";
import { AppDispatch, RootState } from "../store";
import { toNumber } from "../utils";

export const UpdateProject = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const projects: any = useSelector<RootState>(state => { return state.projects || initialListState });

    useEffect(() => {
        if (!projects?.called) {
            dispatch(fetchProjects());
        }
    }, [projects]);


    let currentProject = {};

    try {
        currentProject = projects?.list?.find((project: ProjectType) => project.id == toNumber(id));
    } catch (error) {

    }


    const handleSubmit = (params: ProjectType) => {
        dispatch(updateProject(params)).then(() => {
            dispatch(fetchProjects());
            alert('Project Updated !');
            navigate('/');
        }).catch(e => console.log(e));
    }

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
        <Stack className="projectFormHeader" >
            <Stack direction={"row"} spacing={2} >
                <Stack justifyContent={"center"} flex={0} >
                    <Button size="medium" variant="contained" onClick={() => navigate("/")}>Home</Button>
                </Stack>
                <Stack flex={2} alignItems={"center"} pr={6}>
                    <h1>Edit Project #{id}</h1>
                </Stack>
            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <ProjectForm handleSubmitCallback={handleSubmit} project={currentProject} />
        </Stack>
    </Stack>
}
