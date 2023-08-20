import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  score: number
}

const initialState: CounterState = {
  score: 0,
}

export const scoreSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementScore: (state) => {    
      state.score += 1
    },
    resetScore: () => initialState
   
  },
})


export const { incrementScore, resetScore} = scoreSlice.actions

export default scoreSlice.reducer