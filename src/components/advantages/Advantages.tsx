'use client'

import { FC, useState, useEffect } from "react";
import cn from 'classnames';
import Image from "next/image";

import { useDebounce } from "../hooks/useDebounce";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

interface AdvantagesI {
    save: boolean;
    setSave: (value: boolean) => void
}

export const Advantages:FC<AdvantagesI> = () => {


    const { addElement } = useActions()
    const { elementsAdvantages } = useAppSelector(state => state.advantages)

    const clearStorage = () => {
        localStorage.clear()
    }

    return(
        <div>
            <div className="text-c_blue-primary_G800 defaultStyleText mb-[8px]">
                Advantages
            </div>
            <div
                id="advantages group"
                className="flex flex-col max-h-[300px] overflow-auto"
            > 
                {elementsAdvantages.map((item, index) => (
                        <div 
                            key={index}
                            className={""}
                        >
                            <ItemInput 
                                index={index}
                                placeholder="placeholder"
                                icon={"/trash.svg"}               
                            />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between">
                <div
                    id="button add"
                    className={cn(
                        "flex items-center justify-center w-[44px] h-[44px]",
                        "border-[1.5px] border-c_purple-100 rounded-[4px]",
                        "mb-[24px]"
                    )}
                    onClick={() => addElement("")}
                >
                    <Image 
                        src={"/Plus.svg"}
                        alt={"add item"}
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}

interface InputI {
    index: number;
    placeholder: string;
    icon?: string;
}

const ItemInput:FC<InputI> = ({
    index,
    placeholder,
    icon,
}) => {

    const { elementsAdvantages } = useAppSelector(state => state.advantages)
    const { removeElement, writeElement } = useActions()


    const [error, setError] = useState<boolean>(false)
    const [debounceValue, setDebounceValue] = useState<string>(elementsAdvantages[index])
    const debounceItem:string = useDebounce(debounceValue, 1000)

    useEffect(() => {
        if(debounceItem !== "" || debounceItem !== undefined){
            setDebounceValue(debounceItem)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }, [debounceItem])

    useEffect(() => {
        if(debounceItem !== elementsAdvantages[index]){
            writeElement({debounceItem, index})
        }
    }, [debounceItem])

    const removeHandler = () => {
        removeElement(index)
    }

    const handlerValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setDebounceValue(e.target.value)
    }

    return(
        <div className="flex flex-col mb-[8px]">
            <div className="flex">
                <input 
                    value={debounceValue}
                    onChange={handlerValueInput}
                    className={cn(
                        "p-[12px] md:w-[330px] w-[80vw] h-[44px] bg-c_grey-alpha04",
                        "border-[1px] border-c_grey-alpha16 rounded-[4px]",
                        "appearance-none focus:outline-none focus:border-bg-c_grey-alpha5",
                        "peer",
                        error && "border-[#f00]",
                    )}
                    placeholder={placeholder}
                    required  
                />
                {icon && index > 2 && 
                    <div 
                        className="flex items-center ml-[16px]"
                        onClick={removeHandler}
                    >
                        <Image 
                            src={icon}
                            alt={"trash icon"}
                            width={20}
                            height={19}
                        />
                    </div>
                }
            </div>
            <div className="">
                { error && 
                    <div className="text-[12px] leading-[16px] font-mont text-c_grey-alpha48">{}
                        Поле должно быть заполнено или удалено
                    </div>
                }
            </div>
        </div>
    )
}