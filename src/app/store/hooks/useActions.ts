import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { authAction } from "../Features/auth/auth"
import { userAction } from "../Features/user/user" 
import { advageAction } from "../Features/advantages/advantages";
import { checkAction } from "../Features/check/check";
import { radioAction } from "../Features/radio/radio";
import { aboutAction } from "../Features/about/about"

const rootActions = {
    ...authAction,
    ...userAction,
    ...advageAction,
    ...checkAction,
    ...radioAction,
    ...aboutAction,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch]
    )
}