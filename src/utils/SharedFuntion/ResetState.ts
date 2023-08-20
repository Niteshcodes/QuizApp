import { useDispatch } from "react-redux";
import { resetAllQuestions } from "../../store/questionReducers/AllQuestions";
import { resetCurrentQuestion } from "../../store/questionReducers/CurrentQuestion";
import { resetScore } from "../../store/questionReducers/Score";
import { dialogState } from "../../store/dialogStatus";

export function ResetState() {
  const dispatch = useDispatch();

  // Move dispatch calls inside the functional component body
  dispatch(resetAllQuestions());
  dispatch(resetCurrentQuestion());
  dispatch(resetScore());
  dispatch(dialogState(false));

  // It's a good practice to return some JSX from your functional component
  return null; // You can return null or any JSX element here
}
