
/*
src/pages/CustomerDashboard/CustomerFilters.jsx
*/
import React, { useState, useEffect } from 'react'

export default function CustomerFilters({ value, onChange }) {
    const [local, setLocal] = useState(value)
    useEffect(() => setLocal(value), [value])
    function update(k, v) { setLocal((l) => ({ ...l, [k]: v })) }
    return (
        <div className="card p-3">
            <div className="row g-2">
                <div className="col-md-4">
                    <input className="form-control" placeholder="Search by ref, customer, or product" value={local.search} onChange={(e) => update('search', e.target.value)} />
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
                        <option value="createdAt">Newest</option>
                        <option value="quantity">Quantity</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-select" value={local.sortDir} onChange={(e) => update('sortDir', e.target.value)}>
                        <option value="desc">Desc</option>
                        <option value="asc">Asc</option>
                    </select>
                </div>
                <div className="col-md-2 d-flex">
                    <button className="btn btn-primary me-2" onClick={() => onChange(local)}>Apply</button>
                    <button className="btn btn-outline-secondary" onClick={() => { setLocal({ search: '', status: 'all', sortBy: 'createdAt', sortDir: 'desc' }); onChange({ search: '', status: 'all', sortBy: 'createdAt', sortDir: 'desc' }) }}>Reset</button>
                </div>
            </div>
        </div>
    )
}