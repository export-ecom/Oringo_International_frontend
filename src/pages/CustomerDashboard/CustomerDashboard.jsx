/*
src/pages/CustomerDashboard/CustomerDashboard.jsx
This page includes filters, inquiries table, notifications, profile quick-edit modal, and wishlist stub.
*/
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInquiries, setFilters, setPage } from '../../store/slices/inquiriesSlice'
import { applyFilters, paginate } from '../../utils/helpers'
import InquiriesTable from './InquiriesTable'
import CustomerFilters from './CustomerFilters'
import Pagination from '../../components/Pagination'
import { pushNotification } from '../../store/slices/uiSlice'
import styles from './CustomerDashboard.module.css'

export default function CustomerDashboard() {
    const dispatch = useDispatch()
    const { items, status, filters, pagination } = useSelector((s) => s.inquiries)
    const auth = useSelector((s) => s.auth.user)

    useEffect(() => {
        if (status === 'idle') dispatch(fetchInquiries())
    }, [dispatch, status])

    useEffect(() => {
        // Simulate a notification only if auth exists
        if (auth?.name) {
            dispatch(pushNotification({ title: 'Welcome back', body: `Hello ${auth.name}` }))
        }
    }, [dispatch, auth])

    const filtered = useMemo(() => applyFilters(items, filters), [items, filters])
    const pageData = useMemo(() => paginate(filtered, pagination.page, pagination.pageSize), [filtered, pagination.page, pagination.pageSize])

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Customer Dashboard</h2>
                <div>
                    {/* Safe access to role */}
                    <span className="badge bg-primary me-2">Role: {auth?.role || 'Guest'}</span>
                </div>
            </div>

            <CustomerFilters value={filters} onChange={(f) => dispatch(setFilters(f))} />

            <div className="mt-3">
                <InquiriesTable items={pageData.data} loading={status === 'loading'} />
            </div>

            <div className="mt-3 d-flex justify-content-end">
                <Pagination page={pageData.page} pages={pageData.pages} onPage={(p) => dispatch(setPage(p))} />
            </div>
        </div>
    )
}
