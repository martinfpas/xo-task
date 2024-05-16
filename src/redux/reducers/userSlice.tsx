import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { User as UserType, UsersListStateType } from "../../types/types";

export const initialListState: UsersListStateType = { list: [], error: '', isLoading: false, called: false };

export const fetchUsers = createAsyncThunk('project/fetchUsers', () => {
    return axios.get(`${process.env.API_HOST}/users`).then(response => {
        return response.data.map((user: UserType) => { return { ...user, id: user.id } })
    })
})

export const usersSlice = createSlice({
    name: "users",
    initialState: initialListState,
    reducers: {
        add: (state) => {
            console.log(state);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading == true;
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.called = true;
                state.list = action.payload;
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.list = [];
                state.error = action.error.message || 'General Error';
            })
    }
})

export const { add } = usersSlice.actions;

export default usersSlice.reducer;

