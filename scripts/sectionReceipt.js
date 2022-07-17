import { writeReceipt } from "../store.js"

const receiptOutput = sectionReceipt.querySelector('.receipt-output')

const render = () => receiptOutput.textContent = writeReceipt()

export const hydration = () => {
    document.addEventListener('addItem', render)
    document.addEventListener('removeItem', render)
}
