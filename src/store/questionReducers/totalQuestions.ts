import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './CurrentQuestion'

const initialState: CounterState = {
  value: 0,
}

export const TotalQuestions = createSlice({
  name: 'TotalQuestions',
  initialState,
  reducers: {   
    totalQuestions: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    resetTotalQuestions: () => initialState
  },
})


export const { totalQuestions ,resetTotalQuestions} = TotalQuestions.actions

export default TotalQuestions.reducer