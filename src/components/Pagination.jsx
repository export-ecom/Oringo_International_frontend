/*
src/components/Pagination.jsx
*/
import React from 'react'

export default function Pagination({ page, pages, onPage }) {
    const items = []
    for (let i = 1; i <= pages; i++) items.push(i)
    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPage(page - 1)}>Prev</button>
                </li>
                {items.map((p) => (
                    <li className={`page-item ${p === page ? 'active' : ''}`} key={p}>
                        <button className="page-link" onClick={() => onPage(p)}>{p}</button>
                    </li>
                ))}
                <li className={`page-item ${page === pages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPage(page + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    )
}