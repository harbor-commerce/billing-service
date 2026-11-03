export function refundsCsv(refunds) {
  const rows = refunds.map((r) => [r.orderId, r.amount, r.status].join(','))
  return ['order,amount,status', ...rows].join('\n')
}

export const routes = {
  'GET /refunds.csv': () => refundsCsv([]),
}
