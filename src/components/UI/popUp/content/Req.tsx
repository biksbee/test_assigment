import { FC } from "react";
import cn from 'classnames';
import Image from "next/image";

import { Button } from "../../button/Button";

interface reqI {
    req: boolean;
    setShow: (value: boolean) => void
}

export const Req:FC<reqI> = ({req, setShow}) => {

    return(
        <div className="w-[460px] h-[312px] bg-[#fff] rounded-xl p-[32px]">
            <div
                className={cn(
                    "text-[20px] leading-[26px] w-full font-semibold font-mont flex mb-[24px]",
                    req ? "justify-center" : "justify-between",
                )}
            >
                {
                    req ? "Форма успешно отправлена" : "Ошибка"
                }
                {
                    !req &&
                    <div
                        className="w-[28px] h-[28px] rounded-full bg-c_grey-alpha04 flex justify-center items-center cursor-pointer"
                        onClick={() => setShow(false)}
                    > 
                        <Image 
                            src={"/Close.svg"}
                            alt={"close"}
                            width={20}
                            height={20}
                        />
                    </div>
                }
            </div>
            <div className="w-full h-[132px] flex justify-center items-center mb-[22px]">
                <div 
                    className={cn(
                        "w-[80px] h-[80px] rounded-full flex items-center justify-center",
                        req ? "bg-c_green-emer" : "bg-c_red-berry"
                    )}
                >
                    <Image 
                        src={req ? "/success.svg" : "/fail.svg"}
                        alt={req ? "success" : "fail"}
                        width={48}
                        height={48}
                    />
                </div>
            </div>
            <div 
                className={cn(
                    "h-[44px] w-full flex",
                    req ? "justify-center" : "justify-between",
                )}
            >
                <Button 
                    text={req ? "На главную" : "Закрыть"}
                    href={req ? "/" : "/step3"}
                    handler={() => {setShow(false)}}
                    type={"next"}
                />
            </div>
        </div>
    )
}