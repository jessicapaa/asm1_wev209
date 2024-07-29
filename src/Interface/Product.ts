export interface IProduct {
    id?: number | string;
    // id?: number
    name: string;
    category?: string;
    price: number;

    description?: string;
    image?: string;
}
