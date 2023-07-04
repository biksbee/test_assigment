import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { informationAction } from "../Features/signIn/signin";

const rootActions = {
    ...informationAction
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch]
    )
}