import { origins, types } from './constants.js'

const inventory = [
    {
        name: 'Book',
        type: types.BOOK,
        origin: origins.NATIONAL,
        price: 12.49,
        id: 1,
    },
    {
        name: 'Music CD',
        type: types.COMMON,
        origin: origins.NATIONAL,
        price: 14.99,
        id: 2,
    },
    {
        name: 'Chocolate Bar',
        type: types.FOOD,
        origin: origins.NATIONAL,
        price: 0.85,
        id: 3,
    },
    {
        name: 'Imported Box of Chocolate',
        type: types.FOOD,
        origin: origins.IMPORTED,
        price: 10,
        id: 4,
    },
    {
        name: 'Imported Bottle of Perfume',
        type: types.COMMON,
        origin: origins.IMPORTED,
        price: 47.5,
        id: 5,
    },
    {
        name: 'Imported Bottle of Perfume',
        type: types.COMMON,
        origin: origins.IMPORTED,
        price: 27.99,
        id: 6,
    },
    {
        name: 'Bottle of Perfume',
        type: types.COMMON,
        origin: origins.NATIONAL,
        price: 18.99,
        id: 7,
    },
    {
        name: 'Packet of Headache Pills',
        type: types.MEDICAL,
        origin: origins.NATIONAL,
        price: 9.75,
        id: 8,
    },
    {
        name: 'Imported Box of Chocolates',
        type: types.FOOD,
        origin: origins.IMPORTED,
        price: 11.25,
        id: 9,
    },
]

export default inventory