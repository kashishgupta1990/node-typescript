// sum.test.js
import { expect, test } from 'vitest'
import { TransactionHelper } from './transection.helper'

test('adds 1 + 2 to equal 3', () => {
    expect(TransactionHelper.computeTotalSpent({
        existingTotal: 1,
        transactionAmount: 2
    })).toBe(3)
})