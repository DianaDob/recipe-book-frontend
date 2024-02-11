import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Receipe, ReceipeWithIngredsDTO } from '../model/receipe';
import { ReceipeService } from '../service/receipe-service.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipe?: ReceipeWithIngredsDTO;
  faTrashCan = faTrashAlt;
  id:number;
  addMode: boolean = false;

  //@ViewChild('dialog') dialog: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: ReceipeService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipe(this.id).subscribe(data => {
      this.recipe = data;
      console.log(this.recipe);});
  }

  deleteRecipe(id:number){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {if(result){
      this.recipeService.deleteRecipe(id).subscribe(() => {
        this.router.navigate(['/receipes']);
      });
    }})
    
  }

  toggleAddMode(inAddMode:boolean){
    this.addMode = inAddMode;
  }

}
