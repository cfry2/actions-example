import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type payload = PayloadAction<{one: string, two: string}>

const sumSlice = createSlice({
  name: 'todos',
  initialState: {value: 0},
  reducers: {
    sum: (state, action: payload) => {
        state.value = Number(action.payload.one) + Number(action.payload.two)
    }
  },
})

export const { sum } = sumSlice.actions
export default sumSlice.reducer