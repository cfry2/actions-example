import Button from ".";
import {test, expect, vi} from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('handles actions', async () => {
    const func = vi.fn()
    render(<Button onClick={func}/>)
    await userEvent.click(screen.getByText('Go!'))
    expect(func).toBeCalled()
})