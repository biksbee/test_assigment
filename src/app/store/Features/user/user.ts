'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_NICK_NAME_SNAME = 'nns' 

export interface userType {
    nickName: string;
    name: string;
    surnName: string;
    sex: string;
}

export interface valuesI {
    valuesUser: {
        nickName: string, 
        name: string,
        surnName: string,
        sex: string,
    }
}

const initialState:valuesI = {
    valuesUser: {
        nickName: JSON.parse(localStorage.getItem(LS_NICK_NAME_SNAME) ?? '{}').nickName ?? '',
        name: JSON.parse(localStorage.getItem(LS_NICK_NAME_SNAME) ?? '{}').name ?? '',
        surnName: JSON.parse(localStorage.getItem(LS_NICK_NAME_SNAME) ?? '{}').surnName ?? '',
        sex: JSON.parse(localStorage.getItem(LS_NICK_NAME_SNAME) ?? '{}').sex ?? '',
    }
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<userType>) => {
            state.valuesUser.nickName = action.payload.nickName
            state.valuesUser.name = action.payload.name
            state.valuesUser.surnName = action.payload.surnName   
            state.valuesUser.sex = action.payload.sex
            localStorage.setItem(LS_NICK_NAME_SNAME, JSON.stringify(state.valuesUser))         
        }
    }
})

export const userAction = userSlice.actions

export default userSlice.reducer