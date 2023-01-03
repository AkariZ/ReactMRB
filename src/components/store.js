import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../pages/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})