import { clearItems, getBasketProducts, getTotalCost, removeItem } from "../store.js"
import { format } from "./utils.js"

const basketList = sectionBasket.querySelector('.basket-list')
const basketTotal = sectionBasket.querySelector('.basket-total')

const render = () => {
    const items = getBasketProducts().map(({count, id, name, price}) => 
    count > 1
        ? `
    <div>
        <div>${count} × ${name}</div>
        <div>${format.currency(count * price)} Unit. ${format.currency(price)}</div>
        <button class='remove-product' data-id=${id}>remove</button>
    </div>
    `
        : `
    <div>
        <div>${name}</div>
        <div>${format.currency(price)}</div>
        <button class='remove-product' data-id=${id}>remove</button>
    </div>
    `)
    basketList.innerHTML = items.join('')
    if (items.length > 1) {
        basketList.insertAdjacentHTML('beforeend',
        `<button class="clear-basket" type="button">
            clear basket
        </button>`
        )
    }
}

const updateTotal = () => {
    basketTotal.textContent = format.currency(getTotalCost().price)
}

export const hydration = () => {
    basketList.addEventListener('click', ({target}) => {
        const closestButton = target.closest('button.remove-product')
        if (closestButton)
            removeItem(+closestButton.dataset.id)
        const clearButton = target.closest('button.clear-basket')
        if (clearButton)
            clearItems()
    })
    document.addEventListener('addItem', render)
    document.addEventListener('addItem', updateTotal)
    document.addEventListener('removeItem', render)
    document.addEventListener('removeItem', updateTotal)
}