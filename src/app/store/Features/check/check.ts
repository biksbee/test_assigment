'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_CHECK = 'lcc'

export interface checkI {
    elementsCheck: number[];
}

const initialState: checkI = {
    elementsCheck: JSON.parse(localStorage.getItem(LS_CHECK) ?? '[]')
}

export const checkSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        addElementCheck: (state, action: PayloadAction<number>) => {
            state.elementsCheck.push(action.payload)
            localStorage.setItem(LS_CHECK, JSON.stringify(state.elementsCheck))
        },
        removeElementCheck: (state, action: PayloadAction<number>) => {
            state.elementsCheck = state.elementsCheck.filter(elementId => elementId !== action.payload)
            localStorage.setItem(LS_CHECK, JSON.stringify(state.elementsCheck))
        }
    }
})

export const checkAction = checkSlice.actions

export default checkSlice.reducer;