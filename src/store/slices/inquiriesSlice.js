/*
src/store/slices/inquiriesSlice.js
Manages inquiries, filtering, pagination, status updates, and export stub.
*/
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mockData from '../mock/data.js';


// Async thunk to simulate fetching (could be replaced with real API calls)
export const fetchInquiries = createAsyncThunk('inquiries/fetch', async () => {
    await new Promise((r) => setTimeout(r, 300))
    return mockData.inquiries
})

const initialState = {
    items: [],
    status: 'idle',
    error: null,
    filters: {
        search: '',
        status: 'all',
        sortBy: 'createdAt',
        sortDir: 'desc',
    },
    pagination: {
        page: 1,
        pageSize: 10,
    },
}

const inquiriesSlice = createSlice({
    name: 'inquiries',
    initialState,
    reducers: {
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload }
            state.pagination.page = 1
        },
        setPage(state, action) {
            state.pagination.page = action.payload
        },
        updateInquiryStatus(state, action) {
            const { id, status } = action.payload
            const idx = state.items.findIndex((i) => i.id === id)
            if (idx >= 0) state.items[idx].status = status
        },
        bulkUpdateStatus(state, action) {
            const { ids, status } = action.payload
            state.items.forEach((it) => {
                if (ids.includes(it.id)) it.status = status
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInquiries.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchInquiries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchInquiries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { setFilters, setPage, updateInquiryStatus, bulkUpdateStatus } = inquiriesSlice.actions
export default inquiriesSlice.reducer
