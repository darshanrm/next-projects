// import { cookies } from 'next/headers'


export async function DELETE(request: Request,{ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:7001/product/${params.id}/`, { cache: 'no-store',method:"DELETE" })
    const data = await res.json()
    return Response.json({ status:"OK",message:"Deleted Success" })
}

export async function PUT(request: Request,{ params }: { params: { id: string } }) {
    const req = await request.json()
    const res = await fetch(`http://localhost:7001/product/${params.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    })
    return Response.json(req)
  }