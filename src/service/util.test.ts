// sum.test.js
import { expect, test } from 'vitest'
import { UtilService } from './util.service'

test('adds 1 + 2 to equal 3', () => {
    expect(UtilService.sum(1, 2)).toBe(3)
})