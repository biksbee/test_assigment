'use client'

import { FC, useState, useEffect } from "react";

import { Page } from "../UI/page/Page";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { InputSelect } from "../UI/inputSelect/InputSelect";
import { ProgressBar } from "../UI/progressBar/Progressbar";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

export const CreatePage:FC = () => {
    
    const { saveUser } = useActions()
    const { valuesUser } = useAppSelector(state => state.user)

    const [nickName, setNickName] = useState<string>(valuesUser.nickName)
    const [name, setName] = useState<string>(valuesUser.name)
    const [surnName, setSurnName] = useState<string>(valuesUser.surnName)
    const [sex, setSex] = useState<string>(valuesUser.sex)
    const [disabled, setDisabled] = useState<boolean>(false)

    // console.log("sex: " + sex)

    useEffect(() => {
        if(name !== "" &&
            nickName !== "" &&
            surnName !== "" &&
            sex !== ""
        ){
            setDisabled(false)
            saveUser({nickName, name, surnName, sex})
        } else setDisabled(true)
    }, [name, nickName, surnName, sex])

    const eventHandler = (nickname:string, name: string, surname:string, sex: string) => {
        //api
    }

    return(
        <Page 
            type="default"
        >
            <div 
                id="first section"
                className=""
            >
                <ProgressBar />
            </div>
            <div 
                id="second section"
                className=""
            >
                <Input 
                    id="Nickname"
                    value={nickName}
                    onChange={setNickName}
                    placeholder={"snouden"}
                    type={"nickname"}
                />
                <Input 
                    id="Name"
                    value={name}
                    onChange={setName}
                    placeholder={"Edward"}
                    type={"name"}
                />
                <Input 
                    id="Surname"
                    value={surnName}
                    onChange={setSurnName}
                    placeholder={"Snowden"}
                    type={"name"}
                />
                <InputSelect 
                    id="Sex"
                    value={sex}
                    onChange={setSex}
                    placeholder={"Не выбрано"}
                    icon={"/vectorDown.svg"}
                    type={"sex"}
                />
            </div>
            <div 
                id="third section"
                className="flex justify-between"
            >
                <Button 
                    text={"Назад"}
                    href={"/"}
                    type={"back"}
                />
                <Button 
                    text={"Далее"}
                    handler={() => eventHandler(nickName, name, surnName, sex)}
                    href={"/step2"}
                    type={"next"}
                    disabled={disabled}
                />
            </div>
        </Page>
    )
}