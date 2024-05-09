export interface IProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    ingredients: string[];
    image: string;
}

export interface ICategory {
    category: string;
    iconName: string;
    products?: IProduct[];
}

export interface IUser {
    id: string;
    username?: string;
    email: string;
    password: string;
}
