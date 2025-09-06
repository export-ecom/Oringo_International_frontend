import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInquiries, setFilters, setPage } from '../../store/slices/inquiriesSlice'
import AdminFilters from './AdminFilters'
import AdminInquiriesTable from './AdminInquiriesTable'
import Pagination from '../../components/Pagination'
import ChartsPanel from './ChartsPanel'

export default function AdminDashboard() {
    const dispatch = useDispatch()
    const { items, status, filters, pagination } = useSelector((s) => s.inquiries)
    const auth = useSelector((s) => s.auth.user)

    useEffect(() => {
        if (status === 'idle') dispatch(fetchInquiries())
    }, [dispatch, status])

    // Summary stats
    const stats = useMemo(() => {
        const total = items.length
        const pending = items.filter((i) => i.status === 'pending').length
        const approved = items.filter((i) => i.status === 'approved').length
        const rejected = items.filter((i) => i.status === 'rejected').length
        return { total, pending, approved, rejected }
    }, [items])

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between mb-3">
                <h2>Admin Dashboard</h2>
            </div>

            <div className="row g-3 mb-3">
                <div className="col-md-3">
                    <div className="card p-3">
                        <h6>Total Inquiries</h6>
                        <h3>{stats.total}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <h6>Pending</h6>
                        <h3>{stats.pending}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <h6>Approved</h6>
                        <h3>{stats.approved}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <h6>Rejected</h6>
                        <h3>{stats.rejected}</h3>
                    </div>
                </div>
            </div>

            <ChartsPanel items={items} />

            <div className="mt-3">
                <AdminFilters value={filters} onChange={(f) => dispatch(setFilters(f))} />
            </div>

            <div className="mt-3">
                <AdminInquiriesTable items={items} />
            </div>

            <div className="mt-3 d-flex justify-content-end">
                <Pagination
                    page={pagination.page}
                    pages={Math.ceil(items.length / pagination.pageSize)}
                    onPage={(p) => dispatch(setPage(p))}
                />
            </div>
        </div>
    )
}
