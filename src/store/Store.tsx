import { configureStore } from '@reduxjs/toolkit'
import currentQuestionReducer from "./questionReducers/CurrentQuestion"
import scoreReducer from './questionReducers/Score'
import allQuestionsReducer from './questionReducers/AllQuestions'
import TotalQuestionsReducer from './questionReducers/totalQuestions'
import DialogStatusReducer from './dialogStatus'
export const store = configureStore({
  reducer: {
    currentQuestion:currentQuestionReducer ,
    score: scoreReducer,
    allQuestions:allQuestionsReducer,
    TotalQuestions:TotalQuestionsReducer,
    DialogStatus:DialogStatusReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch