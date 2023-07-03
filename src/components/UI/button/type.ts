export type ButtonType = 'next' | 'back' | 'delete'

export const buttonStateType: Record<ButtonType, string> = {
    next: "text-[#fff] bg-c_purple-100",
    back: "text-c_purple-100 bg-[#fff] border-[1px] border-c_purple-100",
    delete: "bg-[#f00] text-white"
}