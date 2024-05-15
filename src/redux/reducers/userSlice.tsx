import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers:{
        add:(state) =>{
            console.log(state);
        }
    }
})

export const { add} = usersSlice.actions;

export default usersSlice.reducer;

