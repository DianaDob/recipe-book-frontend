import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: 'receipes', component: ReceipeListComponent },
  { path: '', component: ReceipeListComponent},
  { path: 'addrecipe', component: AddRecipeComponent },
  { path: 'receipe/:id', component: RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
