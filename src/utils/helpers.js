/*
src/utils/helpers.js
Common helpers for filtering, sorting and pagination
*/
export function applyFilters(items, filters) {
    let out = [...items]
    const s = (filters.search || '').toLowerCase()
    if (s) {
        out = out.filter((it) => (
            it.refNo.toLowerCase().includes(s) ||
            it.customerName.toLowerCase().includes(s) ||
            (it.product || '').toLowerCase().includes(s)
        ))
    }
    if (filters.status && filters.status !== 'all') {
        out = out.filter((it) => it.status === filters.status)
    }
    const dir = filters.sortDir === 'asc' ? 1 : -1
    out.sort((a, b) => {
        if (filters.sortBy === 'createdAt') {
            return dir * (new Date(a.createdAt) - new Date(b.createdAt))
        }
        if (filters.sortBy === 'quantity') {
            return dir * (a.quantity - b.quantity)
        }
        return 0
    })
    return out
}

export function paginate(items, page, pageSize) {
    const total = items.length
    const pages = Math.max(1, Math.ceil(total / pageSize))
    const p = Math.min(Math.max(1, page), pages)
    const start = (p - 1) * pageSize
    return {
        data: items.slice(start, start + pageSize),
        total,
        page: p,
        pages,
    }
}
