import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  onIngredientAddition(q: string, n: string, receipeId: number|null, ingredients:Ingredient[]){
    ingredients.push({quantity:q, name:n, receipeId:receipeId});
    return ingredients
  }

  onDelete(ingredient: Ingredient, ingredients:Ingredient[]) {
    ingredients = ingredients.filter(item => item !== ingredient);
    return ingredients
  }
}
