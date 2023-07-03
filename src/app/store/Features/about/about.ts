'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_ABOUT = 'about' 

export interface aboutI {
    about: string
}

const initialState:aboutI = {
    about: JSON.parse(`${localStorage.getItem(LS_ABOUT)}`),
}


export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        saveAbout: (state, action: PayloadAction<string>) => {
            state.about = action.payload   
            localStorage.setItem(LS_ABOUT, JSON.stringify(state.about))         
        }
    }
})

export const aboutAction = aboutSlice.actions

export default aboutSlice.reducer