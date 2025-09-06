/*
src/pages/CustomerDashboard/InquiriesTable.jsx
*/
import React from 'react'

export default function InquiriesTable({ items, loading }) {
    if (loading) return <div className="text-center py-4">Loading...</div>
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((it) => (
                        <tr key={it.id}>
                            <td>{it.refNo}</td>
                            <td>{it.product}</td>
                            <td>{it.quantity}</td>
                            <td>{new Date(it.createdAt).toLocaleDateString()}</td>
                            <td>
                                <span
                                    className={`badge ${it.status === 'approved' ? 'bg-success' :
                                        it.status === 'rejected' ? 'bg-danger' :
                                            'bg-warning text-dark'
                                        }`}
                                >
                                    {it.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary me-1">View</button>
                                <button className="btn btn-sm btn-outline-secondary">Messages</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
