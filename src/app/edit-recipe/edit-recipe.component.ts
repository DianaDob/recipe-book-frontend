import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../model/receipe';
import { Ingredient } from '../model/ingredient';
import { IngredientService } from '../service/ingredient-service.service';
import { ReceipeService } from '../service/receipe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  @Input()
  recipe:Receipe

  recipeToEdit:Receipe

  @Output()
  editRecipeEvent = new EventEmitter<boolean>()


  constructor(private ingredientService:IngredientService,
              private recipeService: ReceipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.recipeToEdit = structuredClone(this.recipe)
  }

  onSubmitEditedRecipe(editedRecipe:Receipe){
    editedRecipe.ingredients = this.recipe.ingredients;
    editedRecipe.receipeId = this.recipe.receipeId;
    this.recipeService.updateRecipe(editedRecipe).subscribe(() => {
      this.router.navigate(['/receipes']);
    });
  }

  onIngredientAddition(q: string, n: string, ingredients:Ingredient[]){
    this.recipeToEdit.ingredients = this.ingredientService.onIngredientAddition(q, n, ingredients);
  }

  onDelete(ingredient: Ingredient, ingredients:Ingredient[]) {
    this.recipeToEdit.ingredients = this.ingredientService.onDelete(ingredient, ingredients);
  }

  cancelEdit(){
    this.editRecipeEvent.emit(false);
  }

}

