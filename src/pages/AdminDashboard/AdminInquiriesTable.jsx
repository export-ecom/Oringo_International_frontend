/*
src/pages/AdminDashboard/AdminInquiriesTable.jsx
This component includes bulk actions visible to admin roles only (role-based UI simulation)
*/
import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, paginate } from '../../utils/helpers'
import { updateInquiryStatus, bulkUpdateStatus } from '../../store/slices/inquiriesSlice'

export default function AdminInquiriesTable({ items }) {
    const dispatch = useDispatch()
    const auth = useSelector((s) => s.auth.user)
    const filters = useSelector((s) => s.inquiries.filters)
    const pagination = useSelector((s) => s.inquiries.pagination)

    const filtered = useMemo(() => applyFilters(items, filters), [items, filters])
    const pageData = useMemo(() => paginate(filtered, pagination.page, pagination.pageSize), [filtered, pagination.page, pagination.pageSize])
    const [selected, setSelected] = useState([])

    function toggleSelect(id) {
        setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
    }
    function setStatus(id, status) {
        dispatch(updateInquiryStatus({ id, status }))
    }
    function doBulk(status) {
        dispatch(bulkUpdateStatus({ ids: selected, status }))
        setSelected([])
    }

    return (
        <div>
            <div className="mb-2 d-flex justify-content-between align-items-center">
                <div>
                    {/* Only show bulk buttons if user exists and role is not customer */}
                    {auth?.role !== 'customer' && (
                        <>
                            <button className="btn btn-sm btn-success me-2" onClick={() => doBulk('approved')} disabled={!selected.length}>Approve</button>
                            <button className="btn btn-sm btn-danger" onClick={() => doBulk('rejected')} disabled={!selected.length}>Reject</button>
                        </>
                    )}
                </div>
                <div>{selected.length} selected</div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ref</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.data.map((it) => (
                            <tr key={it.id}>
                                <td><input type="checkbox" checked={selected.includes(it.id)} onChange={() => toggleSelect(it.id)} /></td>
                                <td>{it.refNo}</td>
                                <td>{it.customerName}</td>
                                <td>{it.product}</td>
                                <td>{it.quantity}</td>
                                <td>{new Date(it.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <span className={`badge ${it.status === 'approved' ? 'bg-success' :
                                        it.status === 'rejected' ? 'bg-danger' :
                                            'bg-warning text-dark'
                                        }`}>
                                        {it.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-outline-primary me-1" onClick={() => setStatus(it.id, 'approved')}>Approve</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => setStatus(it.id, 'rejected')}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
