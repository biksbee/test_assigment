import { FC } from "react";
import cn from 'classnames';

import type { PageType } from "./type";
import { pageState } from "./type";

interface PageI {
    children: any;
    type: PageType;
}

export const Page:FC<PageI> = ({children, type}) => {

    return(
        <div className={cn(
            "xl:mx-[233px] md:mx-[100px] mx-[20px] rounded-t-[12px]",
            "xl:w-[900px] w-full bg-[#fff] h-max",
            pageState[type]
        )}>
            {children}
        </div>
    )
}