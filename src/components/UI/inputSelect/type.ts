export type SelectItems = 'sex'

export const itemsState: Record<SelectItems, string[]> = {
    sex: ["man", "woman", "add"]
}

export enum Items {
    "man",
    "woman",
    "add",
    length = 3
}