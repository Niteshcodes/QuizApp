
import { Platform } from "../components/Platform"
import ScoreBoard from "../components/ScoreBoard"

import type { RootState } from '../store/Store'
import { useSelector, useDispatch } from 'react-redux'
// import { increment } from './store/questionReducers/CurrentQuestion'
// import { incrementScore } from "./store/questionReducers/Score"
import { increment, resetCurrentQuestion } from "../store/questionReducers/CurrentQuestion"
import { useNavigate } from "react-router-dom"
// import {ResetState} from "../utils/SharedFuntion/ResetState"
import { resetAllQuestions } from "../store/questionReducers/AllQuestions"
import { resetScore } from "../store/questionReducers/Score"
import { dialogState } from "../store/dialogStatus"
import { resetTotalQuestions } from "../store/questionReducers/totalQuestions"



function Game() {
  const score = useSelector((state: RootState) => state?.score?.score);
  const questionNumber = useSelector((state: RootState) => state.currentQuestion.value)
  const totalQuestions = useSelector((state: RootState) => state.TotalQuestions.value)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleRestart = () => {
    dispatch(resetAllQuestions());
    dispatch(resetCurrentQuestion());
    dispatch(resetScore());
    dispatch(resetTotalQuestions());
    dispatch(dialogState(false));
    navigate('/')
    // dispatch(incrementByAmount(0))
  }
  const handleNext = () => {
    dispatch(increment())
  }
  return (
    <>
      <h2 className="text-center my-4 font-bold text-2xl ">Quiz Game</h2>
      <div id="scoreBoard">
        <ScoreBoard currentAnswer={score} totalQuestions={totalQuestions} />
        <div className="w-[80vw] m-auto p-3   ">
          <Platform questionNumber={questionNumber} />
        </div>


        <div className="w-[80vw] m-auto p-3  justify-between flex ">
          <button onClick={handleRestart} className='border-2 px-5 py-2  my-1 rounded-sm hover:bg-[#dddcdc] bg-[#0C356A] text-white hover:text-[#0C356A]'>
            Restart
          </button>
          <button
            onClick={handleNext}
            className='border-2 px-5 py-2  my-1 rounded-sm hover:bg-[#dddcdc] text-white'
            style={{
              backgroundColor: (questionNumber + 1 < totalQuestions) ? '#0C356A' : '#0C356A4D',
              cursor: (questionNumber + 1 < totalQuestions) ? 'pointer' : 'not-allowed'
            }}
            disabled={questionNumber + 1 >= totalQuestions}
          >
            Next
          </button>
        </div>
      </div>


    </>
  )
}

export default Game
