import { Ingredient } from "./ingredient";

export class Receipe {
    receipeId: number;
    name: string;
    ingredients: Ingredient[];
    preparation: string;
}
