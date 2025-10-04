import { useState } from 'react'

function fakePayment(amount) {
  return new Promise(resolve => setTimeout(() => resolve({ ok: true, txnId: Math.random().toString(36).slice(2) }), 1200))
}

export default function Tickets() {
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)
  const [receipt, setReceipt] = useState(null)
  const price = 199
  const total = qty * price

  async function handleCheckout(e) {
    e.preventDefault()
    setLoading(true)
    const res = await fakePayment(total)
    setLoading(false)
    if (res.ok) setReceipt(res)
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Tickets</h2>
      <p className="text-gray-600 mt-1">Secure your spot at TechConf.</p>

      <form onSubmit={handleCheckout} className="mt-6 border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">General Admission</div>
            <div className="text-gray-600 text-sm">Access to all talks and expo</div>
          </div>
          <div className="text-lg font-semibold">${price}</div>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Quantity</label>
          <input type="number" min="1" value={qty} onChange={e => setQty(Number(e.target.value) || 1)} className="border rounded-md px-3 py-2 w-24" />
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-gray-600">Total</div>
          <div className="text-xl font-bold">${total}</div>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 disabled:opacity-50">
          {loading ? 'Processing…' : 'Checkout'}
        </button>
        {receipt && (
          <div className="rounded-md bg-green-50 text-green-800 p-4 text-sm">Payment successful. Transaction ID: <span className="font-mono">{receipt.txnId}</span></div>
        )}
        <p className="text-xs text-gray-500">Prefer a provider? We can link to Stripe/PayPal checkout.</p>
      </form>
    </section>
  )
}


