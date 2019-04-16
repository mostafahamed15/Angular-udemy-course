import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service'; 
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  //recipes array
  recipes: Recipe[];
  

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

 

}
