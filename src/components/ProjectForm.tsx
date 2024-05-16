import { useForm, SubmitHandler } from "react-hook-form";
import { Project as ProjectType } from "../types/types";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ProjectForm = (params: any) => {
    const { project, handleSubmitCallback } = params;
    const { register, handleSubmit } = useForm<ProjectType>();
    const onSubmit: SubmitHandler<ProjectType> = data => handleSubmitCallback(data);

    console.log(project);

    return <form onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={2}>
            <Stack>
                <label>Name</label>
                <Input type="contained" {...register("name")} />
            </Stack>
            <Stack>
                <label>Description</label>
                <Input type="contained" {...register("description")} />
            </Stack>
            <Stack>
                <label>Owner</label>
                <Input type="contained" {...register("owner")} />
            </Stack>
            <Stack>
                <Button variant="contained" type="submit">Save</Button>
            </Stack>
        </Stack>
    </form>;
}