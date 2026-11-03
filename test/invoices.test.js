import test from 'node:test'
import assert from 'node:assert/strict'
import { total } from '../src/invoices.js'

test('total sums amount times qty', () => assert.equal(total([{ amount: 100, qty: 3 }, { amount: 50, qty: 1 }]), 350))
