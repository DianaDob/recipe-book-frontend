import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../model/receipe';
import { ReceipeService } from '../service/receipe-service.service';
import { Router } from '@angular/router';
import { Ingredient } from '../model/ingredient';
import { IngredientService } from '../service/ingredient-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  
  ingredients: Ingredient[] = [];

  constructor(private receipeService: ReceipeService, 
              private router: Router,
              private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  onRecipeSubmit(recipe: Receipe){
    recipe.ingredients = this.ingredients;
    console.log(recipe);
    this.receipeService.save(recipe).subscribe(() => {this.router.navigate(['/receipes'])});

  }

  onIngredientAddition(q: string, n: string, ingredients:Ingredient[]){
    this. ingredients = this.ingredientService.onIngredientAddition(q, n, ingredients);
  }

  onDelete(ingredient: Ingredient, ingredients:Ingredient[]) {
    this.ingredients = this.ingredientService.onDelete(ingredient, ingredients);
  }

}
