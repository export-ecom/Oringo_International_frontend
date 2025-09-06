/*
src/mock/generateMockData.js
Run this once to create data.json or just use the included data.json. This generator creates 100 inquiries.
*/
function randChoice(arr) { return arr[Math.floor(Math.random() * arr.length)] }

const statuses = ['pending', 'approved', 'rejected']
const products = ['Steel Rods', 'Cotton Yarn', 'Spices - Cardamom', 'Leather', 'Plastic Granules']

const inquiries = Array.from({ length: 100 }).map((_, i) => {
    const status = randChoice(statuses)
    const createdAt = new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 90)).toISOString()
    return {
        id: `inq_${1000 + i}`,
        refNo: `RF-${String(1000 + i).padStart(4, '0')}`,
        customerId: `cust_${String(1 + (i % 10)).padStart(3, '0')}`,
        customerName: `Customer ${1 + (i % 10)}`,
        product: randChoice(products),
        quantity: Math.floor(Math.random() * 1000) + 1,
        createdAt,
        status,
        quotes: [
            {
                id: `q_${1000 + i}`,
                amount: Math.floor(Math.random() * 5000) + 200,
                currency: 'USD',
                createdAt,
                approved: status === 'approved',
            },
        ],
        messages: [],
        attachments: [],
    }
})

export default { inquiries }

/*
Save the generated output into src/mock/data.json (we included it in the mock folder).
*/