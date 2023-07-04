'use client'

import { FC, useState, useEffect } from "react";

import { Page } from "../UI/page/Page";
import { ProgressBar } from "../UI/progressBar/Progressbar";
import { Button } from "../UI/button/Button";
import { Advantages } from "../advantages/Advantages";
import { CheckGroup } from "../checkGroup/CheckGroup";
import { RadioGorup } from "../radioGroup/RadioGroup";

import { useAppSelector } from "@/app/store/hooks/useType";


const Step2Page:FC = () => {

    const { information } = useAppSelector(staet => staet.signIn)

    const [disabled, setDisabled] = useState<boolean>(true)
    const [saveValue, setSaveValue] = useState<boolean>(false)

    useEffect(() => {
        if(
            information.advantages.length >= 3 && !information.advantages.includes("") &&
            information.check.length !== 0 && information.radio !== null
        ){
            setDisabled(false)
        } else setDisabled(true)
    }, [information.advantages, information.check, information.radio])

    const eventHandler = () => {
            setSaveValue(true)
        //api
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
            >
                <Advantages 
                    save={saveValue}
                    setSave={setSaveValue}
                />
                <CheckGroup 
                
                /> 
                <RadioGorup 
                
                />
            </div>
            <div
                id="third section"
                className="flex justify-between"
            >
                <Button 
                    text={"Back"}
                    href={"/step1"}
                    type={"back"}
                />
                <Button 
                    text={"Далее"}
                    handler={eventHandler}
                    href={"/step3"}
                    type={"next"}
                    disabled={disabled}
                />
            </div>
        </Page>
    )
}

export default Step2Page