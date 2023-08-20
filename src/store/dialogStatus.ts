import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IDialog{
    value:boolean
}

const initialState: IDialog = {
  value: false,
};

export const DialogStatus = createSlice({
  name: "DialogStatus",
  initialState,
  reducers: {
    dialogState: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { dialogState } = DialogStatus.actions;

export default DialogStatus.reducer;
