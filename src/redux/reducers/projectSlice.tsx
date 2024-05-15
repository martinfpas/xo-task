import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {Project as ProjectType, ProjectsListStateType} from '../../types/types';
import axios from 'axios';

const initialListState: ProjectsListStateType = {list:[],error:'',isLoading:false};

export const fetchProjects = createAsyncThunk('project/fetchProjects',() => {
    return axios.get('http://localhost:3000/projects').then(response => {
        return response.data.map(project => {return {...project,id : parseInt(project.id)}})
    })
})

export const projectSlice = createSlice({
    name: 'projects',
    initialState:initialListState,
    reducers:{
        add:(state)=>{
            state.list.push({id:2,name:"123",owner:{id:1,email:"test@me.com",name:"J Doe"},description:"test"});
            console.log(state);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state) =>{
            state.isLoading == true;
        }),
        builder.addCase(fetchProjects.fulfilled,(state,action) => {
            state.isLoading = false;
            console.log('action.payload',action.payload);
            state.list = action.payload;
        }),
        builder.addCase(fetchProjects.rejected,(state,action)=>{
            state.isLoading = false;
            state.list = [];
            state.error = action.error.message || 'General Error';
        })
    }
})

export const {add} = projectSlice.actions;

export default projectSlice.reducer;