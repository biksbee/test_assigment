'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_INFORMATION = 'inf';

export interface informationI {
    information: {
        phone: string,
        email: string,
        nickName: string,
        name: string,
        surnName: string,
        sex: string,
        advantages: string[],
        check: number[],
        radio: number,
        about: string,
    }
}

export interface authI {
    phone: string;
    email: string;
}

export interface userI {
    nickName: string;
    name: string;
    surnName: string;
    sex: string;
}

export interface vI {
    index: number
    debounceItem: string;
}

const inf = JSON.parse(localStorage.getItem(LS_INFORMATION) ?? '{}')

const initialState:informationI = {
    information: {
        phone: inf.phone ?? '',
        email: inf.email ?? '',
        nickName: inf.nickName ?? '',
        name: inf.name ?? '',
        surnName: inf.surnName ?? '',
        sex: inf.sex ?? '',
        advantages: inf.advantages ?? ["", "", ""],
        check: inf.check ?? [],
        radio: inf.radio ?? '',
        about: inf.about ?? '',
    }
}

export const informationSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        authInf: (state, action: PayloadAction<authI>) => {
            state.information.phone = action.payload.phone   
            state.information.email = action.payload.email
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))         
        },
        userInf: (state, action: PayloadAction<userI>) => {
            state.information.nickName = action.payload.nickName
            state.information.name = action.payload.name
            state.information.surnName = action.payload.surnName   
            state.information.sex = action.payload.sex
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))  
        },
        addElement: (state, action: PayloadAction<string>) => {
            state.information.advantages.push(action.payload)
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
        },
        writeElement: (state, action: PayloadAction<vI>) => {
            state.information.advantages[action.payload.index] = action.payload.debounceItem
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
            
        },
        removeElement: (state, action: PayloadAction<number>) => {
            state.information.advantages = state.information.advantages.filter((element, index) => index !== action.payload)
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
        },
        addElementCheck: (state, action: PayloadAction<number>) => {
            state.information.check.push(action.payload)
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
        },
        removeElementCheck: (state, action: PayloadAction<number>) => {
            state.information.check = state.information.check.filter(elementId => elementId !== action.payload)
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
        },
        changeElementRadio: (state, action: PayloadAction<number>) => {
            state.information.radio = action.payload
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))
        },
        aboutInf: (state, action: PayloadAction<string>) => {
            state.information.about = action.payload   
            localStorage.setItem(LS_INFORMATION, JSON.stringify(state.information))         
        }
    }
})

export const informationAction = informationSlice.actions

export default informationSlice.reducer