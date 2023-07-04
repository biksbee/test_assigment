'use client'

import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./Features/signIn/signin";

export const store = configureStore({
    reducer: {
        signIn: signinReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;