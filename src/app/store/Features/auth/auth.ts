'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_EMAIL_PHONE = 'ep' 

export interface userType {
    phone: string;
    email: string;
}

export interface valuesI {
    values: {
        phone: string, 
        email: string,
    }
}

const initialState:valuesI = {
    values: {
        phone: JSON.parse(localStorage.getItem(LS_EMAIL_PHONE) ?? '{}').phone ?? '',
        email: JSON.parse(localStorage.getItem(LS_EMAIL_PHONE) ?? '{}').email ?? '',
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveValue: (state, action: PayloadAction<userType>) => {
            state.values.email = action.payload.email
            state.values.phone = action.payload.phone   
            localStorage.setItem(LS_EMAIL_PHONE, JSON.stringify(state.values))         
        }
    }
})

export const authAction = authSlice.actions

export default authSlice.reducer