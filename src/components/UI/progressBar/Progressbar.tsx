'use client'

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import cn from 'classnames'


export const ProgressBar:FC = () => {

    const [progress, setProgress] = useState<number>(2)
    
    useEffect(() => {
        setProgress(+window.location.href.slice(-1,))
    }, [window.location.href])

    return(
        <div 
            className="w-full h-[48px] mb-[66px] flex flex-col"
        >
            <div
                className="h-[8px] w-full bg-c_grey-alpha08 flex justify-between relative"
            >
                <div
                    className={""}
                >
                    <Item 
                        item={1}
                        progress={progress}
                        />
                </div>
                {progress >= 2 && <div className="absolute z-10 top-0 left-[15px] bg-c_purple-100 w-[49%] h-full" />}
                <div
                    className={""}
                >
                    <Item 
                        item={2}
                        progress={progress}
                        />
                </div>
                {progress >= 3 && <div className="absolute z-10 top-0 left-[52%] bg-c_purple-100 w-[49%] h-full" />}
                <div
                    className={""}
                >
                    <Item 
                        item={3}
                        progress={progress}
                        />
                </div>
            </div>
            
        </div>
    )
}

interface ItemI {
    item: number;
    progress: number;
}

const Item:FC<ItemI> = ({item, progress}) => {

    return(
        <div 
            className={cn(
                "flex flex-col absolute z-10 -top-1 justify-center gap-y-[12px]"
            )}
        >
            <div 
                className={cn(
                    "rounded-full w-[16px] h-[16px] flex items-center justify-center",
                    item <= progress ? "bg-c_purple-100" : "bg-c_grey-primary_G350"
                )}
            >
                {
                    item === progress ? 
                        <div className="rounded-full w-[3.2px] h-[3.2px] bg-[#fff]" /> :
                    item < progress ?
                    <Image 
                        src={"/mark.svg"}
                        alt="mark"
                        width={16}
                        height={16}
                    /> :
                    null
                }
            </div>
            <div 
                className={cn(
                    "text-[14px] leading-[20px] flex justify-center font-mont font-semibold",
                    item <= progress ? "text-c_purple-100" : "text-c_grey-primary_G350"
                )}
            >
                {item}
            </div>
        </div>
    )
}