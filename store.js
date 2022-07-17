import inventory from './inventory.js'
import { origins, types } from './constants.js'
import { format } from './scripts/utils.js'

const basket = {}

export const getBasket = () => Object.freeze({...basket})

export const getBasketProducts = () =>
    Object.entries(basket).map(([ id, count ]) => {
        const itemData = getItemData(+id)
        return {
            ...itemData,
            count
        }
    })

const getTax = ({ type, origin, price }) => {
    const basicSalesTax = type === types.COMMON ? 0.1 : 0
    const importDuty = origin === origins.IMPORTED ? 0.05 : 0
    return Math.ceil(20 * (basicSalesTax + importDuty) * price)/20
}

const getItemData = id => {
    const itemBaseData = inventory.find(item => item.id === id)
    return {
        ...itemBaseData,
        tax: getTax(itemBaseData)
    }
}

export const getTotalCost = () =>
    Object.entries(basket).reduce((acc, [id, count]) => {
        const { price, tax } = getItemData(+id)
        return {
            price: acc.price + count * price,
            tax: acc.tax + count * tax
        }
    }, { price: 0, tax: 0 })

export const addItem = id => {
    basket[id] = (basket[id] || 0) + 1
    const ev = new CustomEvent('addItem', {
        detail: [getItemData(id), getBasket()]
    })
    document.dispatchEvent(ev)
}

export const removeItem = id => {
    basket[id] = basket[id] - 1
    if (basket[id] < 1) delete basket[id]
    const ev = new CustomEvent('removeItem', {
        detail: [getItemData(id), getBasket()]
    })
    document.dispatchEvent(ev)
}

const getNextItem = () => Object.keys(basket)[0]

export const clearItems = () => {
    const next = getNextItem()
    if (next) {
        removeItem(+next)
        clearItems()
    } else {
        const ev = new CustomEvent('clearItems')
        document.dispatchEvent(ev)
    }
}

export const writeReceipt = () => {
    const acquiredItems = Object.entries(basket)
        .filter(([id, count]) => count > 0)
    if (!acquiredItems.length) return ''
    const priceList = acquiredItems.reduce((acc, [id, count]) => {
        const {name, price, tax} = getItemData(+id)
        return `${acc}${count} ${name}: ${format.currency(count * (price + tax))}\n`
    }, ``)
    const {price, tax} = getTotalCost()
    const output = `${priceList}\nSales Tax: ${format.currency(tax)}\nTotal: ${format.currency(price + tax)}`
    return output
}