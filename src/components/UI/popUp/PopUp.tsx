import { FC } from "react";
import cn from "classnames";

interface popUp {
    children: any;
    show: boolean;
    setShow: (value: boolean) => void;
}

export const PopUp:FC<popUp> = ({show, setShow, children}) => {

    const eventHandler = () => {
        
    }

    return(
        <div 
            className={cn(
                "bg-c_grey-alpha16 w-screen h-screen absolute z-50 top-0 left-0",
                "flex justify-center items-center",
            )}
        >
            {children}
        </div>
    )
}