import { FC, useState } from "react";
import cn from 'classnames'
import Link from "next/link";

import type { ButtonType } from "./type";
import { buttonStateType } from "./type";

interface ButtonI { 
    text: string;
    handler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
    disabled?: boolean;
    type: ButtonType;
}

export const Button:FC<ButtonI> = ({
    text, 
    handler, 
    href, 
    disabled,
    type,
}) => {

    const [effect, setEffect] = useState<boolean>(false)

    return(
        <Link
            href={(!disabled ? href : "") ?? ""}
            onMouseEnter={() => {setEffect(true)}}
            onMouseLeave={() => {setEffect(false)}}
            onClick={handler}
            className={cn(
                buttonStateType[type],
                "px-[16px] py-[12px] rounded-[4px]",
                effect && "opacity-80",
                "active:shadow-3xl",
                "cursor-pointer duration-200",
                disabled && type === 'next' && "opacity-50 text-c_grey-alpha16 bg-white border-[1px] border-c_grey-alpha5"
            )}
        >
                <div
                    className="text-[14px] leading-[20px]"
                >
                    {text}
                </div>
        </Link>
    )
}