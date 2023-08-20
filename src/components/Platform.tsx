import React, { useEffect, useState } from 'react';
import QuestionBox from './QuestionBox';
// import { IQuestionBoxProps } from './QuestionBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { useNavigate } from 'react-router-dom';
import { incrementScore } from '../store/questionReducers/Score';
import { increment } from '../store/questionReducers/CurrentQuestion';
import DialogBox from './DialogBox';
import { dialogState } from '../store/dialogStatus';

interface PlatformProps {
    questionNumber: number
}


export const Platform: React.FC<PlatformProps> = (props) => {
    const navigate = useNavigate()
    const [randomOrder, setRandomOrder] = useState<string[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const questions = useSelector((state: RootState) => state.allQuestions.questions);

    const currentQuestion = questions[props.questionNumber]

    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentQuestion) {

            navigate('/')
            return
        }
        const options = [...currentQuestion.incorrect_answers, currentQuestion?.correct_answer]
        setRandomOrder(shuffleArray(options))
    }, [currentQuestion])


    function shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleNextQuestion(): void {
        if (props.questionNumber + 1 < questions.length) {
            dispatch(increment())
        }
        else {
            dispatch(dialogState(true))
        }
    }

    const handleSelectAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectedOption = e.currentTarget.textContent;
        setSelectedAnswer(selectedOption)
        if (selectedOption === currentQuestion.correct_answer) {
            dispatch(incrementScore())
            setTimeout(() => {
                handleNextQuestion()
            }, 300)
            return
        }
        setTimeout(() => {
            handleNextQuestion()
        }, 300)
    };

    return (
        <div>
            {currentQuestion && <QuestionBox question={currentQuestion?.question} questionNumber={props.questionNumber + 1} />}

            {randomOrder.map((item, index) => (
                <button
                    key={index}
                    className={`w-full border-2 p-5 my-1 rounded-sm hover:bg-[#dddcdc] ${selectedAnswer === item
                        ? item === currentQuestion?.correct_answer
                            ? 'bg-green-500 hover:bg-green-500'
                            : 'bg-red-500 hover:hover:bg-red-500'
                        : 'bg-white'
                        }`}
                    onClick={handleSelectAnswerClick}
                    dangerouslySetInnerHTML={{ __html: item }}
                >
                </button>
            ))}
            <DialogBox />

        </div>
    );
};

