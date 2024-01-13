import { Ingredient } from "./ingredient";

export class Receipe {
    receipeId: number;
    name: string;
    preparation: string;
}

export class ReceipeWithIngredsDTO {
    receipeId: number;
    name: string;
    ingredients: Ingredient[];
    preparation: string;
}
