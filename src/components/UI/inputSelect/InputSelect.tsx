'use client'

import { FC, useEffect, useState } from "react"
import cn from 'classnames'
import Image from "next/image"

import type { SelectItems } from "./type"
import { itemsState } from "./type"
import { Items } from "./type"
import { useDebounce } from "@/components/hooks/useDebounce"

interface InputProps {
    id: string;
    onChange: (value:string) => void;
    value: string;
    placeholder: string;
    icon?: string;
    type: SelectItems;
}

export const InputSelect:FC<InputProps> = ({
    id, 
    onChange,
    value,
    placeholder,
    icon,
    type,
}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [valueSelect, setValueSelect] = useState<string>(value !== "" ? value : placeholder)
    
    const [debounceValue, setDebounceValue] = useState<string>("")
    const debounceItem = useDebounce(debounceValue, 500)

    useEffect(() => {
        if(value === '')
            setDebounceValue('')
    }, [value])

    useEffect(() => {
            if(valueSelect !== "add" && valueSelect !== "Не выбрано")
                onChange(valueSelect)
            else
                onChange(debounceValue)
    }, [valueSelect, debounceItem])

    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setDebounceValue(e.target.value)
    }

    return(
        <div className="flex flex-col mt-[8px] mb-[24px]">
            <label 
                htmlFor={id}
                className={cn(
                    "text-[14px] leading-[20px] text-c_blue-primary_G800 pb-[8px] font-mont"
                )}
            >
                {id}
            </label>
            {
                valueSelect !== "add" ?
                <div
                    id={id}
                    onClick={() => {setOpen(!open)}}
                    className={cn(
                        "p-[12px] md:w-[400px] w-[80vw] h-[40px] bg-c_grey-alpha04",
                        "border-[1px] border-bg-c_grey-alpha16 rounded-[4px]",
                        "appearance-none focus:outline-none focus:border-bg-c_grey-alpha5",
                        "peer relative cursor-pointer",
                        "flex items-center text-c_grey-alpha48 font-mont text-[14px] leading-[20px]"
                        )}
                        >
                    {valueSelect}
                    <div 
                        className={cn(
                            "absolute z-10 top-0 right-[12px] h-full flex items-center duration-500",
                            !open && "rotate-180"
                        )}
                    >
                        <Image 
                            src={`${icon}`}
                            alt={"select icon"}
                            width={20}
                            height={20}
                            />
                    </div>
                    <div
                        id="select area"
                        className={cn(
                            "absolute z-10 top-[40px] right-[2px]",
                            "w-full bg-[#fff] transition-all h-auto overflow-hidden",
                            !open ? 'max-h-0' : 'max-h-[100px]'
                            )}
                            >
                        {/* {itemsState[type].map((item, index) => ( */}
                        {Array.from(Items).map((item, index) => (
                            <div
                            key={index}
                            className={"h-full flex items-center hover:bg-c_grey-light duration-300"}
                            >
                                <Item 
                                    value={item}
                                    setValueSelect={setValueSelect}
                                    />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <input 
                    placeholder={valueSelect}
                    value={valueSelect !== "add" ? valueSelect : debounceValue}
                    onChange={handler}
                    className={cn(
                        "p-[12px] md:w-[400px] w-[80vw] h-[40px] bg-c_grey-alpha04",
                        "border-[1px] border-c_grey-alpha16 rounded-[4px]",
                        "appearance-none focus:outline-none focus:border-bg-c_grey-alpha5",
                        "peer cb"
                    )}
                    required
                />
            }
        </div>
    )
}

interface ItemProps {
    value: string;
    setValueSelect: (value: string) => void;
}

const Item:FC<ItemProps> = ({value, setValueSelect}) => {

    return(
        <div
            id="item"
            className={cn(
                "w-full h-full py-[8px] px-[12px] text-c_blue-primary_G800 text-[14px] leading-[20px] duration-500",
            )}
            onClick={() => {setValueSelect(value)}}
        >
            {value}
        </div>
    )
}