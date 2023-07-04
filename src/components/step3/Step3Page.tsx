'use client'

import { FC, useState, useEffect } from "react";
import cn from "classnames"

import { useDebounce } from "@/components/hooks/useDebounce";
import { Page } from "../UI/page/Page";
import { ProgressBar } from "../UI/progressBar/Progressbar";
import { Button } from "../UI/button/Button";
import { Validation } from "@/components/UI/input/type";
import { PopUp } from "../UI/popUp/PopUp";
import { Req } from "../UI/popUp/content/Req";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

export const Step3Page:FC = () => {

    const { aboutInf } = useActions()
    const { information } = useAppSelector(state => state.signIn)

    const [disabled, setDisabled] = useState<boolean>(true)
    const [show, setShow] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [req, setReq] = useState<boolean>(true)

    const [debounceValue, setDebounceValue] = useState<string>(information.about)
    const debounceItem = useDebounce(debounceValue, 300)

    useEffect(() => {
        if(debounceItem.length < 200 && debounceItem.length > 0){
            setDebounceValue(debounceItem)
            setDisabled(false)
        } else {
            setError(true)
            setDisabled(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }, [debounceItem])

    const eventHandler = () => {
        setShow(true)
        aboutInf(debounceValue)
    }

    return(
        <Page
            type="default"
        >
            <div
                id="first section"
            >
                <ProgressBar />
            </div>
            <div
                id="second section"
                className="mb-[64px]"
            >
                <div className="flex flex-col">
                    <label 
                        htmlFor={"about"}
                        className={cn(
                            "text-[14px] leading-[20px] text-c_blue-primary_G800 pb-[8px] font-mont"
                        )}
                    >
                        {"About"}
                    </label>
                    <textarea
                        id={"about"}
                        value={debounceValue}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setDebounceValue(e.target.value)
                        }}
                        className={cn(
                            "p-[12px] w-full h-[84px] bg-c_grey-alpha04",
                            "border-[1px] border-c_grey-alpha16 rounded-[4px]",
                            error && "border-[#f00]",
                            "appearance-none focus:outline-none focus:border-bg-c_grey-alpha5",
                            "peer"
                        )}
                        placeholder={"placeholder"}
                        required
                        maxLength={201}  
                    />
                    <div className="flex flex-row-reverse justify-between">
                        <div className="w-[60px] h-[18px] text-right">
                            {debounceItem.length}
                        </div>
                        <div className="mt-[8px] mb-[24px]">
                            { error && <div className="text-[12px] leading-[16px] font-mont text-c_grey-alpha48">{Validation[`about`]}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="third section"
                className="flex justify-between"
            >
                <Button 
                    text={"Back"}
                    href={"/step2"}
                    type={"back"}
                />
                <Button 
                    text={"Отправить"}
                    handler={eventHandler}
                    type={"next"}
                    disabled={disabled}
                />
            </div>
            {
                show &&
                <PopUp 
                    show={show}
                    setShow={setShow}
                >
                    <Req 
                        req={req}
                        setShow={setShow}
                    />
                </PopUp>
            }
        </Page>
    )
}