'use client'

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Features/auth/auth"
import userReducer from "./Features/user/user"
import advantagesReduser from "./Features/advantages/advantages"
import checkReducer from "./Features/check/check"
import radioReducer from "./Features/radio/radio"
import aobutReducer from "./Features/about/about"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        advantages: advantagesReduser,
        check: checkReducer,
        radio: radioReducer,
        aboutUser: aobutReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;