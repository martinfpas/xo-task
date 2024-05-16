import Stack from "@mui/material/Stack";
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType } from "../types/types";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { addProject, fetchProjects } from "../redux/reducers/projectSlice";



export const NewProject = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (params: ProjectType) => {
        dispatch(addProject(params)).then(() => {
            dispatch(fetchProjects());
            alert('Project Created !');
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
                    <h1>New Project</h1>
                </Stack>
            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <ProjectForm handleSubmitCallback={handleSubmit} />
        </Stack>
    </Stack>
}