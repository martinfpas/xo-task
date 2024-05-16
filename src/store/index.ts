import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../redux/reducers/projectSlice';
import usersReducer from '../redux/reducers/userSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    users: usersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;