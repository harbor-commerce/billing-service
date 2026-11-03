import * as domain from './invoices.js'

export const routes = {
  'GET /health': () => ({ ok: true, service: 'billing-service' }),
  ...domain.routes,
}
