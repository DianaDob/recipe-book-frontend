import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Receipe } from '../model/receipe';
import { ReceipeService } from '../service/receipe-service.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe?: Receipe;
  faTrashCan = faTrashAlt;
  id:number;
  addMode: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: ReceipeService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipe(this.id).subscribe(data => {
      this.recipe = data;
      console.log(this.recipe);});
  }

  deleteRecipe(id:number){
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.router.navigate(['/receipes']);
    });
  }

  toggleAddMode(inAddMode:boolean){
    this.addMode = inAddMode;
  }

}
