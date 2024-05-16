import Stack from "@mui/material/Stack";
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType } from "../types/types";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";



export const NewProject = () => {
    const navigate = useNavigate();

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
                    <h1>New Project</h1>
                </Stack>

            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <ProjectForm handleSubmitCallback={handleSubmit} />
        </Stack>
    </Stack>
}