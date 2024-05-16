import Stack from "@mui/material/Stack";
import { ProjectForm } from "./ProjectForm";
import { Project as ProjectType } from "../types/types";



export const NewProject = () => {

    const handleSubmit = (params: ProjectType) => {
        console.log(params);
    }

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
        <Stack >
            <Stack direction={"row"} spacing={2}>
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