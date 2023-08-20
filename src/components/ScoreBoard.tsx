import React from 'react'
interface props {
    currentAnswer: number,
    totalQuestions: number
}

const ScoreBoard: React.FC<props> = (props) => {
    return (
        <div className='w-full bg-black text-white text-lg p-3 flex'>
            <h1>Score : </h1>
            <div className='px-2'>
                <span>{props.currentAnswer}</span>/
                <span>{props.totalQuestions}</span>
            </div>
        </div>
    )
}



export default ScoreBoard