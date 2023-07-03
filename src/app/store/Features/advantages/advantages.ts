'use client';

import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_ELEMENT_STRING = 'es'

export interface advantagesI {
    elementsAdvantages: string[];
}

export interface vI {
    index: number
    debounceItem: string;
}

const initialState: advantagesI= {
    elementsAdvantages: JSON.parse(localStorage.getItem(LS_ELEMENT_STRING) ?? '["", "", ""]')
}

export const advantagesSlice = createSlice({
    name: 'advantages',
    initialState,
    reducers: {
        addElement: (state, action: PayloadAction<string>) => {
            state.elementsAdvantages.push(action.payload)
            localStorage.setItem(LS_ELEMENT_STRING, JSON.stringify(state.elementsAdvantages))
        },
        writeElement: (state, action: PayloadAction<vI>) => {
            state.elementsAdvantages[action.payload.index] = action.payload.debounceItem
            localStorage.setItem(LS_ELEMENT_STRING, JSON.stringify(state.elementsAdvantages))
            
        },
        removeElement: (state, action: PayloadAction<number>) => {
            state.elementsAdvantages = state.elementsAdvantages.filter((element, index) => index !== action.payload)
            localStorage.setItem(LS_ELEMENT_STRING, JSON.stringify(state.elementsAdvantages))
        }
    }
})

export const advageAction = advantagesSlice.actions

export default advantagesSlice.reducer;