import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { dialogState } from '../store/dialogStatus';
import { useNavigate } from 'react-router-dom';
// import { incrementByAmount } from '../store/questionReducers/CurrentQuestion';
// import { ResetState } from '../utils/SharedFuntion/ResetState';
import { resetAllQuestions } from '../store/questionReducers/AllQuestions';
import { resetCurrentQuestion } from '../store/questionReducers/CurrentQuestion';
import { resetScore } from '../store/questionReducers/Score';
import { resetTotalQuestions } from '../store/questionReducers/totalQuestions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
  const navigate = useNavigate();
  const isOpen = useSelector((state: RootState) => state.DialogStatus.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(dialogState(false))
  };
  const handleRestart = () => {
    dispatch(resetAllQuestions());
    dispatch(resetCurrentQuestion());
    dispatch(resetScore());
    dispatch(resetTotalQuestions());
    dispatch(dialogState(false));
    navigate('/')
  }

  const correctAnswer = useSelector((state: RootState) => state.score.score);
  const totalQuestions = useSelector((state: RootState) => state.TotalQuestions.value);

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='w-full'
      >
        <DialogTitle className='w-full text-center'>{"Your Score 😉"}</DialogTitle>
        <DialogContent className='w-full'>
          <DialogContentText id="alert-dialog-slide-description" className='w-[10rem] h-[10rem] text-white flex justify-center items-center bg-[black] rounded-[10rem] m-auto'>
            {/* <div className='w-[10rem] h-[10rem] text-white flex justify-center items-center bg-[black] rounded-[10rem] m-auto' > */}
              <span className='text-white'>{correctAnswer}</span>
              <span className='mx-2 text-white'>/</span>
              <span className='text-white'>{totalQuestions}</span>
            {/* </div> */}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleRestart} className='  border-2 px-5 py-2 w-full my-1 rounded-sm hover:bg-[#dddcdc] bg-[#0C356A] text-white hover:text-[#0C356A]'>
            Restart
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
