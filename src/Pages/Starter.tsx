import React, { CSSProperties, useState } from "react";
import { useDispatch } from "react-redux";
// import { RootState } from "../store/Store";
import { getQuestions } from "../utils/services/question";
import { questionData } from "../store/questionReducers/AllQuestions";

import { useForm, SubmitHandler } from 'react-hook-form';
// import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";
import { totalQuestions } from "../store/questionReducers/totalQuestions";
import { incrementByAmount } from "../store/questionReducers/CurrentQuestion";
import { ClockLoader } from "react-spinners";

type FormInputValues = {
    category: string
    totalQuestions: string
    difficulty: string
}

const override: CSSProperties = {
    position: "absolute",
    zIndex: 99,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};


function Starter() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm<FormInputValues>()

    const dispatch = useDispatch();

    const setQuestions = async (props: FormInputValues): Promise<void> => {
        const data = await getQuestions(props.totalQuestions, props.category, props.difficulty);

        if (data) {
            dispatch(questionData(data));
            dispatch(totalQuestions(data.length))
            setLoading(false)
            dispatch(incrementByAmount(0))
            navigate('/game')

        }
    }

    const onSubmit: SubmitHandler<FormInputValues> = (data) => {
        setLoading(true)
        setQuestions(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center h-[100vh] w-full flex-col" >
            <h2 className="text-center mt-4 font-bold text-[2rem]">Quiz Game</h2>
            <p className="text-sm font-mono">Let's Test Your Mind</p>
            <div className='w-[80vw] my-10'>
                <div className='my-2'>
                    <h2>Number of Questions:</h2>
                    <input type="number" min={0} max={50} className='w-full  border-2 px-5 py-2  my-1 rounded-sm' {...register("totalQuestions", { required: true })} />
                </div>
                <div className='my-2'>
                    <h2>Select Difficulty:</h2>
                    <select {...register("difficulty")} className="w-full  border-2  p-2  my-1 rounded-sm ">
                        {/* <option value="any">Any Difficulty</option> */}
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className='my-2'>
                    <h2>Select Category:</h2>
                    <select  {...register("category")} className="w-full  border-2  p-2  my-1 rounded-sm ">

                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>
                <button className='w-full  border-2 px-5 py-2  my-1 rounded-sm hover:bg-[#dddcdc] bg-[#0C356A] text-white hover:text-[#0C356A]' type="submit">
                    Start
                </button>

                <h2>For More Follow: <a href="https://github.com/Niteshcodes" className="text-[blue] text-sm">@NiteshCodes</a></h2>
            </div>

            {loading && <div className="bg-[#0000007c] absolute z-10 w-full h-full top-0 left-0">
            </div>}
            <ClockLoader
                color={"#f21212"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </form>
    )
}

export default Starter

