import inventory from '../inventory.js'
import { addItem , getBasket } from '../store.js'
import { format } from './utils.js'

export const hydration = () => {
    inventory.forEach(item => {
        sectionProducts.insertAdjacentHTML('beforeend',
        `<button class="product" type="button" data-id="${item.id}">
            <span>${item.name}</span>
            <span>${format.currency(item.price)}</span>
        </button>`
        )
    })

    sectionProducts.addEventListener('click', ({target}) => {
        const closestButton = target.closest('button.product')
        if (closestButton)
            addItem(+closestButton.dataset.id)
    })
}
