import { FC, useState, useEffect } from "react";

import { useAppSelector } from "@/app/store/hooks/useType";
import { useActions } from "@/app/store/hooks/useActions";

export const CheckGroup: FC = () => {

    const { elementsCheck } = useAppSelector(state => state.check)

    return(
        <div className="mb-[24px]">
            <div className="text-c_blue-primary_G800 defaultStyleText mb-[8px]">
                Checkbox group
            </div>
            <Item 
                id={1}
            />
            <Item 
                id={2}
            />
            <Item 
                id={3}
            />
        </div>
    )
}

interface ItemI {
    id: number;
}

const Item:FC<ItemI> = ({id}) => {

    const { addElementCheck, removeElementCheck } = useActions()
    const { elementsCheck } = useAppSelector(state => state.check)

    const [active, setActive] = useState<boolean>(elementsCheck.includes(id) ?? false)

    const add = () => {
        setActive(true)
        addElementCheck(id)
    }
    const remove = () => {
        setActive(false)
        removeElementCheck(id)
    }

    return(
        <div className="flex gap-x-[11px]">
            <input 
                id={`${id}`}
                type="checkbox" 
                className="w-[20px] h-[20px] rounded-[4px]"
                onChange={!active ? add : remove}
                defaultChecked={active}
            />
            <label 
                htmlFor={`${id}`}
            >
                {id}
            </label>
        </div>
    )
}