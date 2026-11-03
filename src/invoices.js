export function total(lines) {
  return lines.reduce((sum, l) => sum + l.amount * l.qty, 0)
}

export const routes = {
  'GET /invoices/sample': () => ({ total: total([{ amount: 1990, qty: 2 }]) }),
}
