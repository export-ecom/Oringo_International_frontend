/*
src/pages/AdminDashboard/AdminFilters.jsx
*/
import React, { useState, useEffect } from 'react'

export default function AdminFilters({ value, onChange }) {
    const [local, setLocal] = useState(value)
    useEffect(() => setLocal(value), [value])
    function update(k, v) { setLocal((l) => ({ ...l, [k]: v })) }
    return (
        <div className="card p-3">
            <div className="row g-2">
                <div className="col-md-3">
                    <input className="form-control" placeholder="Search" value={local.search} onChange={(e) => update('search', e.target.value)} />
                </div>
                <div className="col-md-2">
                    <select className="form-select" value={local.status} onChange={(e) => update('status', e.target.value)}>
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-select" value={local.sortBy} onChange={(e) => update('sortBy', e.target.value)}>
                        <option value="createdAt">Created</option>
                        <option value="quantity">Quantity</option>
                    </select>
                </div>
                <div className="col-md-3 d-flex">
                    <button className="btn btn-primary me-2" onClick={() => onChange(local)}>Apply</button>
                    <button className="btn btn-outline-secondary" onClick={() => { setLocal({ search: '', status: 'all', sortBy: 'createdAt', sortDir: 'desc' }); onChange({ search: '', status: 'all', sortBy: 'createdAt', sortDir: 'desc' }) }}>Reset</button>
                </div>
            </div>
        </div>
    )
}
