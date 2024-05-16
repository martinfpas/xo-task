import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Project as ProjectType, ProjectsListStateType } from '../../types/types';
import axios from 'axios';

export const initialListState: ProjectsListStateType = { list: [], error: '', isLoading: false, called: false };

export const fetchProjects = createAsyncThunk('project/fetchProjects', () => {
    return axios.get(`${process.env.API_HOST}/projects`).then(response => {
        return response.data.map((project: ProjectType) => { return { ...project, id: project.id } })
    })
})

export const updateProject = createAsyncThunk('project/updateProject', (project: ProjectType) => {
    return axios.put(`${process.env.API_HOST}/projects/${project.id}`, project).then(response => {
        return response.data;
    })
})


export const addProject = createAsyncThunk('project/addProject', (project: ProjectType) => {
    return axios.post(`${process.env.API_HOST}/projects`, project).then(response => {
        return response.data;
    })
})

export const projectSlice = createSlice({
    name: 'projects',
    initialState: initialListState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state) => {
            state.isLoading == true;
        }),
            builder.addCase(fetchProjects.fulfilled, (state, action) => {
                state.isLoading = false;
                state.called = true;
                state.list = action.payload;
            }),
            builder.addCase(fetchProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.list = [];
                state.error = action.error.message || 'General Error';
            }),

            builder.addCase(updateProject.pending, (state) => {
                state.isLoading == true;
            }),
            builder.addCase(updateProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.called = true;
                state.list = action.payload;
            }),
            builder.addCase(updateProject.rejected, (state, action) => {
                state.isLoading = false;
                state.list = [];
                state.error = action.error.message || 'General Error';
            }),

            builder.addCase(addProject.pending, (state) => {
                state.isLoading == true;
            }),
            builder.addCase(addProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.called = true;
                state.list = action.payload;
            }),
            builder.addCase(addProject.rejected, (state, action) => {
                state.isLoading = false;
                state.list = [];
                state.error = action.error.message || 'General Error';
            })
    }
})

export const { } = projectSlice.actions;

export default projectSlice.reducer;