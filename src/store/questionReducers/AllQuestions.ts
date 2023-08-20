import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface questionObject {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface AllQuestions {
  questions: questionObject[];
}

const initialState: AllQuestions = {
  questions: [],
};

export const allQuestions = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    questionData: (state, action: PayloadAction<questionObject[]>) => {
      state.questions = action.payload;
    },
    resetAllQuestions: () => initialState
  },
});

export const { questionData,resetAllQuestions } = allQuestions.actions;

export default allQuestions.reducer;
