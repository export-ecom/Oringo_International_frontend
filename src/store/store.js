// Redux Toolkit store with slices for auth, inquiries, and UI.
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import inquiriesReducer from './slices/inquiriesSlice'
import uiReducer from './slices/uiSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        inquiries: inquiriesReducer,
        ui: uiReducer,
    },
})



export default store
