import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Receipe } from '../model/receipe';
import { ReceipeService } from '../service/receipe-service.service';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes: Receipe[];
  
  constructor(private receipeService: ReceipeService) { }

  ngOnInit(): void {
    this.receipeService.findAll().subscribe(data => {
      this.receipes = data; 
      console.log(this.receipes);});
  }

}
