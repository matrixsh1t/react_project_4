export interface IProductModel {
    id: number,
    name: string
    price: number
}

export const products: IProductModel[] = [
    {
        id:0,
        name: "Banana",
        price: 100
    },
    {
        id:1,
        name: "Melon",
        price: 200
    },
    {
        id:2,
        name: "Pineapple",
        price: 300
    },
    {
        id:3,
        name: "Mango",
        price: 400
    },
    {
        id:4,
        name: "Apple",
        price: 500
    },
]