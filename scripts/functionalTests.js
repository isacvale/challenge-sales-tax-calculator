import { addItem, writeReceipt } from "../store.js";

export const caseOne = () => {
    addItem(1)
    addItem(1)
    addItem(2)
    addItem(3)
    return writeReceipt() === '2 Book: $24.98\n1 Music CD: $16.49\n1 Chocolate Bar: $0.85\n\nSales Tax: $1.50\nTotal: $42.32'
}

export const caseTwo = () => {
    addItem(4)
    addItem(5)
    return writeReceipt() === '1 Imported Box of Chocolate: $10.50\n1 Imported Bottle of Perfume: $54.65\n\nSales Tax: $7.65\nTotal: $65.15'
}

export const caseThree = () => {
    addItem(6)
    addItem(7)
    addItem(8)
    addItem(9)
    addItem(9)
    addItem(9)
    return writeReceipt() === '1 Imported Bottle of Perfume: $32.19\n1 Bottle of Perfume: $20.89\n1 Packet of Headache Pills: $9.75\n3 Imported Box of Chocolates: $35.55\n\nSales Tax: $7.90\nTotal: $98.38'
}