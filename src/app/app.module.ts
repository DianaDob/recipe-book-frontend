import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeService } from './service/receipe-service.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { MatDialogModule,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReceipeListComponent,
    AddRecipeComponent,
    RecipeDetailComponent,
    EditRecipeComponent,
    NavbarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ReceipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
