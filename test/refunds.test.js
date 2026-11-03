import test from 'node:test'
import assert from 'node:assert/strict'
import { refundsCsv } from '../src/refunds.js'

test('one line per refund under a header', () => {
  assert.equal(refundsCsv([{ orderId: 7, amount: 990, status: 'issued' }]), 'order,amount,status\n7,990,issued')
})
