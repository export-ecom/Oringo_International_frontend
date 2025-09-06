/*
src/store/slices/uiSlice.js
holds UI-level state like modals and notifications
*/
import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        modal: { open: false, content: null },
        notifications: [],
    },
    reducers: {
        openModal(state, action) {
            state.modal = { open: true, content: action.payload }
        },
        closeModal(state) {
            state.modal = { open: false, content: null }
        },
        pushNotification(state, action) {
            state.notifications.unshift({ id: Date.now(), ...action.payload, read: false })
        },
        markAllRead(state) {
            state.notifications.forEach((n) => (n.read = true))
        },
    },
})

export const { openModal, closeModal, pushNotification, markAllRead } = uiSlice.actions
export default uiSlice.reducer