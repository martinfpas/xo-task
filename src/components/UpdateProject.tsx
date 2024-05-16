import { useParams } from "react-router-dom"
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType } from "../types/types";
import Stack from "@mui/material/Stack";

export const UpdateProject = () => {
    const { id } = useParams();


    const handleSubmit = (params: ProjectType) => {
        console.log(params);
    }

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
        <Stack >
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <h1>Edit Project #{id}</h1>
                </Stack>

            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <ProjectForm handleSubmitCallback={handleSubmit} />
        </Stack>
    </Stack>
}