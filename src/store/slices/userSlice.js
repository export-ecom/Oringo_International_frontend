import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 1,
    role: 'customer', // or 'admin'
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Example Corp',
    phone: '+1234567890',
    address: '123 Main Street, City, Country'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateProfile(state, action) {
            return { ...state, ...action.payload };
        },
        changePassword(state, action) {
            // Mock only – in real app, backend handles password change
            console.log('Password updated (mock):', action.payload);
        }
    }
});

export const { updateProfile, changePassword } = userSlice.actions;
export default userSlice.reducer;
