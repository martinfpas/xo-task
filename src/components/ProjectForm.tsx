import { useForm, SubmitHandler } from "react-hook-form";
import { Project as ProjectType } from "../types/types";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { RootState } from "../store";
import { useSelector } from "react-redux";

export const ProjectForm = (params: any) => {
    const { project = { name: "", description: "", owner: "" }, handleSubmitCallback } = params;
    const { register, handleSubmit } = useForm<ProjectType>({ values: project });
    const onSubmit: SubmitHandler<ProjectType> = data => handleSubmitCallback(data);

    const projectsState: any = useSelector<RootState>(state => { return state.projects });

    return <form className="projectForm" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
            <Stack>
                <label><i>Name</i></label>
                <Input type="contained" {...register("name")} />
            </Stack>
            <Stack>
                <label><i>Description</i></label>
                <Input type="contained" {...register("description")} />
            </Stack>
            <Stack>
                <label><i>Owner</i></label>
                <Input type="contained" {...register("owner")} />
            </Stack>
            <Stack>
                <Button disabled={projectsState.isLoading} size="large" variant="contained" type="submit">Save</Button>
            </Stack>
        </Stack>
    </form>;
}