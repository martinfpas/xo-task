import Stack from "@mui/material/Stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { Project as ProjectType } from "../types/types";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";



export const NewProject = () => {
    const { register, handleSubmit } = useForm<ProjectType>();
    const onSubmit: SubmitHandler<ProjectType> = data => console.log(data);

    return <Stack alignItems={"center"} justifyContent={"center"} direction={"column"}>
        <Stack >
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <h1>New Project</h1>
                </Stack>

            </Stack>
        </Stack>

        <Stack width={"100%"} alignItems={"center"}>
            <form onSubmit={handleSubmit(onSubmit)} >
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
            </form>
        </Stack>
    </Stack>
}