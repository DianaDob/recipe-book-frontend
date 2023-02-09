import { Component, Injectable, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Receipe } from '../model/receipe';
import { Ingredient } from '../model/ingredient';
import { ReceipeService } from '../service/receipe-service.service';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit{

  receipes: Receipe[];
  filteredRecipes: Receipe[];
  @ViewChild('searchField') searchFieldContainer:ElementRef 
  
  constructor(private receipeService: ReceipeService) { }

  ngOnInit(): void {
    this.receipeService.findAll().subscribe(data => {
      this.receipes = data; 
      this.filteredRecipes = structuredClone(this.receipes);
      console.log(this.receipes);});
  }
  
  
  filterRecipes(){
	  const filterBy:string = this.searchFieldContainer.nativeElement.value;
	  const lowerCaseFilterBy:string = filterBy.toLowerCase()
	  if(filterBy !== ''){
		  this.filteredRecipes = this.receipes.filter(recipe => 
			  recipe.name.includes(lowerCaseFilterBy) || 
			  this.doRecipeIngredientsIncludeString(recipe.ingredients, lowerCaseFilterBy) ||
			  recipe.preparation.includes(lowerCaseFilterBy))
	  }
	  else{
		  this.filteredRecipes = structuredClone(this.receipes);
	  }
  }
  
  doRecipeIngredientsIncludeString(ingredients:Ingredient[], filter:string){
	  for(let ingred of ingredients){
		  if(ingred.name.includes(filter)){
			  return true;
		  }
	  }
	  return false;
  }

}
