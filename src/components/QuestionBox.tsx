import React from 'react'

export interface IQuestionBoxProps{
    question:string,
    questionNumber:number,
    
}

const QuestionBox: React.FC <IQuestionBoxProps>=(props) =>{
  return (
    <div className='w-full bg-[#0C356A] p-5 font-bold text-white rounded-xl my-3 '>
        <span>{props.questionNumber}.</span>  
        <span dangerouslySetInnerHTML={{ __html: props.question }}></span>        
    </div>
  )
}

export default QuestionBox