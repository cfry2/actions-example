import {test, expect} from 'vitest'
import reducer, {sum} from './sumSlice'

test('should sum numbers', () => {
    expect(reducer({value: 0}, sum({one: '1', two: '1'}))).toEqual({value: 2})
})