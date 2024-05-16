import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Project as ProjectType, User } from "../types/types";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { fetchUsers } from "../redux/reducers/userSlice";

export const ProjectForm = (params: any) => {
    const { project = { name: "", description: "", owner: "" }, handleSubmitCallback } = params;
    const { register, handleSubmit, control } = useForm<ProjectType>({ values: project });
    const onSubmit: SubmitHandler<ProjectType> = data => handleSubmitCallback(data);

    const dispatch = useDispatch<AppDispatch>();

    const projectsState: any = useSelector<RootState>(state => { return state.projects });
    const usersState: any = useSelector<RootState>(state => { return state.users });



    useEffect(() => {
        if (!usersState?.called) {
            dispatch(fetchUsers());
        }
    }, [usersState, usersState?.called]);

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
                <Controller
                    name="owner"
                    render={({ field: { onChange, value } }) => (
                        <Autocomplete
                            onChange={(_, item) => {
                                onChange(item?.id);
                            }}
                            options={usersState?.list.map((user: User): { label: string, id: Number }[] => { return { label: user.name, id: user.id } })}
                            value={value}
                            getOptionLabel={(item: any) => {
                                let usr = { name: "", id: 0 };
                                if (item.id) {
                                    usr = usersState?.list?.find((user: User) => user.id == item.id);
                                } else {
                                    usr = usersState?.list?.find((user: User) => user.id == item);
                                }
                                return (usr?.name ?? "");
                            }}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} label="Owner" />}

                        />
                    )}
                    control={control}
                />

            </Stack>
            <Stack>
                <Button disabled={projectsState.isLoading} size="large" variant="contained" type="submit">Save</Button>
            </Stack>
        </Stack>
    </form>;
}