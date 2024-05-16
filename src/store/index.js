import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../redux/reducers/projectSlice';
import usersReducer from '../redux/reducers/userSlice';

export default configureStore({
  reducer: {
    projects: projectReducer,
    users: usersReducer
  },
})