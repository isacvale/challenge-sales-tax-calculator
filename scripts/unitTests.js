import { addItem, clearItems, getBasket, getBasketProducts, getTotalCost, removeItem, writeReceipt } from "../store.js"

const addExampleItems = () => {
    [1, 4, 4, 6, 7].forEach(num => addItem(num))
}

export const getBasket_empty = () => {
    const emptyStore = getBasket()
    return !Object.entries(emptyStore).length
}

export const getBasketProducts_multiple = () => {
    addExampleItems()
    const items = getBasketProducts()
    const itemList = Object.entries(items)
    const correctNames = ['Book', 'Imported Box of Chocolate', 'Imported Bottle of Perfume', 'Bottle of Perfume']

    if (itemList.length !== 4)
        return false
    for (const item of itemList) {
        if (!correctNames.includes(item[1].name))
        return false
    }
    return true
}

export const getTotalCost_multiple = () => {
    addExampleItems()
    const { price, tax } = getTotalCost()
    if (price !== 79.47) return false
    if (tax !== 7.1) return false
    return true
}

export const addItem_single = () => {
    addItem(1)
    return JSON.stringify(getBasket()) === '{"1":1}'
}

export const removeItem_multiple = () => {
    addExampleItems()
    ;[1, 4, 6, 7].forEach(removeItem)
    if (Object.values(getBasket()).reduce((acc, cur) => acc + cur) !== 1) return false
    if (getBasket()['4'] !== 1) return false
    return true
}

export const clearItems_multiple = () => {
    addExampleItems()
    clearItems()
    return JSON.stringify(getBasket()) === '{}'
}

export const writeReceipt_single = () => {
    addItem(5)
    return writeReceipt() === '1 Imported Bottle of Perfume: $54.65\n\nSales Tax: $7.15\nTotal: $54.65'
}

export const writeReceipt_multiple = () => {
    addExampleItems(5)
    return writeReceipt() === '1 Book: $12.49\n2 Imported Box of Chocolate: $21.00\n1 Imported Bottle of Perfume: $32.19\n1 Bottle of Perfume: $20.89\n\nSales Tax: $7.10\nTotal: $86.57'
}