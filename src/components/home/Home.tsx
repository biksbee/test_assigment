'use client'

import { FC, useState, useEffect } from "react";
import cn from 'classnames';
import Image from "next/image";
import Link from 'next/link'
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { Page } from "../UI/page/Page";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

export const HomePage:FC = () => {

    const { values } = useAppSelector(state => state.auth)
    const { valuesUser } = useAppSelector(state => state.user)
    const { saveValue } = useActions()

    const [phone, setPhone] = useState<string>(values.phone)
    const [email, setEmail] = useState<string>(values.email)
    const [disabled, setDisabled] = useState<boolean>(true)

    useEffect(() => {
        if(phone !== "" && email !== ""){
            saveValue({phone, email})
            setDisabled(false)
        } else setDisabled(true)
    }, [phone, email])

    const eventHandler = (phone: string, email:string) => {
        //api
        if(!disabled){
            setPhone('')
            setEmail('')
        }
    }

    return (
        <Page 
            type={"home"}
        >
            <div>
                <div
                    id="first section"
                    className={cn(
                        "flex items-center pb-[24px] mb-[24px]",
                        "border-b-[1px] border-b-[rgba(0,0,0,0.08)]"
                    )}
                >
                    <div 
                        className="flex justify-center items-center md:w-[80px] w-[40px] md:h-[80px] h-[40px] rounded-full bg-c_blue-light"
                    >
                        <div className="md:text-[40px] text-[25px] font-normal leading-[52px] font-mont text-c_blue-grey">
                            {valuesUser.name !== '' ? valuesUser.name[0] : "N"}
                            {valuesUser.surnName !== '' ? valuesUser.surnName[0] : "S"}
                        </div>    
                    </div>
                    <div
                        id="name and network"
                        className="ml-[24px]"
                    >
                        <div
                            id="name"
                            className="mb-[8px]"
                        >   
                            <div className="text-[20px] leading-[26px] font-semibold font-mont text-c_blue-primary_G800">
                            {valuesUser.name !== '' ? valuesUser.name + ' ' : "Name "}
                            {valuesUser.surnName !== '' ? valuesUser.surnName : "Surnname"}
                            </div>
                        </div>
                        <div
                            id="network"
                            className="flex gap-x-[16px]"
                        >
                            <Link 
                                href={"https://t.me/biksbee"} 
                                target="_blank"
                                className="hover:opacity-60 duration-300"
                            >
                                <div className="flex gap-x-[4px]">
                                    <Image 
                                        src={"/folder.svg"}
                                        alt={"folder"}
                                        width={16}
                                        height={16}
                                    />
                                    <div className="text-c_purple-100 text-[12px] leading-[16px] font-mont">
                                        Telegram
                                    </div>
                                </div>
                            </Link>
                            <Link 
                                href={"https://github.com/biksbee"} 
                                target="_blank"
                                className="hover:opacity-60 duration-300"
                            >
                                <div className="flex gap-x-[4px]">
                                    <Image 
                                        src={"/folder.svg"}
                                        alt={"folder"}
                                        width={16}
                                        height={16}
                                    />
                                    <div className="text-c_purple-100 text-[12px] leading-[16px] font-mont">
                                        GitHub
                                    </div>
                                </div>
                            </Link>
                            <Link 
                                href={"https://docs.google.com/document/d/1_SaBkWhI75_YlRsEf5-tYsc_d43Da6vAFjrLAeYFflE/edit?usp=sharing"} 
                                target="_blank"
                                className="hover:opacity-60 duration-300"
                            >
                                <div className="flex gap-x-[4px]">
                                    <Image 
                                        src={"/folder.svg"}
                                        alt={"folder"}
                                        width={16}
                                        height={16}
                                    />
                                    <div className="text-c_purple-100 text-[12px] leading-[16px] font-mont">
                                        Resume
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    id="second section"
                    className="flex flex-col gap-y-[24px] mb-[48px]"
                >
                    <Input 
                        id="Номер телефона"
                        value={phone}
                        onChange={setPhone}
                        placeholder={"+7 999 999-99-99"}
                        type={"phone"}
                    />
                    <Input 
                        id="Email"
                        value={email}
                        onChange={setEmail}
                        placeholder={"tim.jennings@example.com"}
                        type={"email"}
                    />
                </div>
                <div
                    id="third section"
                    className="flex justify-between"
                >
                    <Button 
                        text={"Начать"}
                        handler={() => eventHandler(phone, email)}
                        href={"/step1"}
                        type={"next"}
                        disabled={disabled}
                    />
                    <Button 
                        text={"delete"}
                        handler={() => localStorage.clear()}
                        type={"delete"}
                    />
                </div>
            </div>
        </Page>
    )
}