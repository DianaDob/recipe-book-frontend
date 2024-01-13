import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe, ReceipeWithIngredsDTO } from '../model/receipe';
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
  recipe:ReceipeWithIngredsDTO

  recipeToEdit:ReceipeWithIngredsDTO;

  @Output()
  editRecipeEvent = new EventEmitter<boolean>()


  constructor(private ingredientService:IngredientService,
              private recipeService: ReceipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.recipeToEdit = structuredClone(this.recipe)
  }

  onSubmitEditedRecipe(editedRecipe:ReceipeWithIngredsDTO){
    console.log('ingredients to save: ', this.recipeToEdit.ingredients);
    editedRecipe.ingredients = this.recipeToEdit.ingredients;
    editedRecipe.receipeId = this.recipeToEdit.receipeId;
    /* this.recipeService.updateRecipe(editedRecipe).subscribe(() => {
      this.router.navigate(['/receipes']);
    }); */
    this.recipeService.save(editedRecipe).subscribe(()=> {
      this.router.navigate(['/receipes']);
    });
    //console.log('edited recipe: ', editedRecipe);
  }

  onIngredientAddition(q: string, n: string, receipeId:number, ingredients:Ingredient[]){
    this.recipeToEdit.ingredients = this.ingredientService.onIngredientAddition(q, n, receipeId, ingredients);
  }

  onDelete(ingredient: Ingredient, ingredients:Ingredient[]) {
    this.recipeToEdit.ingredients = this.ingredientService.onDelete(ingredient, ingredients);
  }

  cancelEdit(){
    this.editRecipeEvent.emit(false);
  }

}

