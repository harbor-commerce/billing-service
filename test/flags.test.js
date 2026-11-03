import test from 'node:test'
import assert from 'node:assert/strict'
import { enabled } from '../src/flags.js'

test('10% rollout enables users 0-9 of each hundred', () => {
  assert.equal(enabled('newCheckout', 105), true)
  assert.equal(enabled('newCheckout', 150), false)
})
