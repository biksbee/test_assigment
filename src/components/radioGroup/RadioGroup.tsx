import { FC, useState, useEffect } from "react";
import { Radio } from "@nextui-org/react";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

export const RadioGorup: FC = () => {
    
    const { changeElementRadio} = useActions()
    const { information } = useAppSelector(state => state.signIn)

    const [checked, setChecked] = useState<number>(information.radio)


    useEffect(() => {
        changeElementRadio(checked)
    }, [checked])

    return(
        <div className="mb-[64px]">
            <div className="text-c_blue-primary_G800 defaultStyleText mb-[8px]">
                Radio group
            </div>
            <Radio.Group
                value={`${checked}`}
                onChange={setChecked}
            >
                    <Item 
                        id={1}
                    />
                    <Item 
                        id={2}
                    />
                    <Item 
                        id={3}
                    />
            </Radio.Group>
        </div>
    )
}

interface ItemI {
    id: number;
}

const Item:FC<ItemI> = ({
    id,
}) => {

    return (
        <div className="flex gap-x-[11px]">
            <Radio 
                value={`${id}`}
            >
                {id}
            </Radio>
        </div>
    )
}