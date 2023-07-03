export type InputType = 'phone' | 'email' | 'nickname' | 'name' | 'ordinary'


export const patternState: Record<InputType, string> = {
    phone: "+7 (9**) ***-**-**",
    email: "",
    nickname: "",
    name: "",
    ordinary: "",
}

export const stateType = {
    phone: /^(\+7|8)\s?\(?9[0-9]{2}\)?(\s|-)?[0-9]{3,}(\s|-)?[0-9]{2,}(\s|-)?[0-9]{2,}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    nickname: /^[A-Z0-9]{2,30}$/i,
    name: /^[A-Z]{2,50}$/i,
    ordinary: /^$/,
}

export enum Validation {
    phone = "не соответствует стандарту номера",
    email = "не соответствует стандарту email адреса",
    nickname = "использовать можно только цифры и буквы латинского алфавита, колличество не должно привышать 30 символов",
    name = "использовать можно только буквы латинского алфавита, колличество не должно привышать 50 символов",
    about = "колличество не должно привышать 200 символов"
}