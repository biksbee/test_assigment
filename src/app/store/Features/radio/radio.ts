'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_RADIO = 'lcr'

export interface radioI {
    elementsRadio: number;
}

const initialState: radioI = {
    elementsRadio: JSON.parse(`${localStorage.getItem(LS_RADIO)}`)
}

export const radioSlice = createSlice({
    name: 'radio',
    initialState,
    reducers: {
        changeElementRadio: (state, action: PayloadAction<number>) => {
            state.elementsRadio = action.payload
            localStorage.setItem(LS_RADIO, JSON.stringify(state.elementsRadio))
        },
    }
})

export const radioAction = radioSlice.actions

export default radioSlice.reducer;