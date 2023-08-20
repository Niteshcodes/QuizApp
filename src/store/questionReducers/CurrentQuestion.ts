import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const currentQuestion = createSlice({
  name: 'currentQuestion',
  initialState,
  reducers: {
    increment: (state) => {    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    resetCurrentQuestion: () => initialState
  },
})


export const { increment, decrement, incrementByAmount,resetCurrentQuestion } = currentQuestion.actions

export default currentQuestion.reducer