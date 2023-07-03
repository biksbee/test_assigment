import { FC, useState, useEffect } from "react"
import cn from 'classnames'
import InputMask from 'react-input-mask';

import { useDebounce } from "@/components/hooks/useDebounce";
import type { InputType } from "./type";
import { patternState, stateType } from "./type";
import { Validation } from "./type";


interface InputProps {
    id?: string;
    onChange: (value:string) => void;
    value: string;
    placeholder: string;
    type: InputType;
}

export const Input:FC<InputProps> = ({
    id,
    onChange,
    value,
    placeholder,
    type,
}) => {

    const [error, setError] = useState<boolean>(false)
    const [debounceValue, setDebounceValue] = useState<string>(value)
    const debounceItem = useDebounce(debounceValue, 900)

    const inputmask = patternState[type]
    const expression: RegExp = stateType[type];

    useEffect(() => {
        if(value === '')
                setDebounceValue('')
    }, [value])

    useEffect(() => {
        if(expression.test(debounceValue)){
            onChange(debounceValue)
            setError(false)
        } else {
            setError(true)
            
        }
        
    }, [debounceItem])

    const handlerValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setDebounceValue(e.target.value)
    }


    return(
        <div className="flex flex-col">
            <label 
                htmlFor={id}
                className={cn(
                    "text-[14px] leading-[20px] text-c_blue-primary_G800 pb-[8px] font-mont"
                )}
            >
                {id}
            </label>
            <InputMask 
                id={id}
                mask={inputmask}
                value={debounceValue}
                onChange={handlerValueInput}
                className={cn(
                    "p-[12px] md:w-[400px] w-[80vw] h-[40px] bg-c_grey-alpha04",
                    "border-[1px] border-c_grey-alpha16 rounded-[4px]",
                    error && "border-[#f00]",
                    "appearance-none focus:outline-none focus:border-bg-c_grey-alpha5",
                    "peer"
                )}
                placeholder={placeholder}
                required
                
            />
            <div className="mt-[8px] mb-[24px]">
                { error && <div className="text-[12px] leading-[16px] font-mont text-c_grey-alpha48">{Validation[`${type}`]}</div>}
            </div>
        </div>
    )
}