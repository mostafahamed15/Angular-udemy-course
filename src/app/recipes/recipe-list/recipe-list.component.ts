import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service'; 
import { Recipe } from '../recipe.model';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  //recipes array
  recipes: Recipe[];
  

  constructor(private recipeService: RecipeServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  addNewRecipe() {
       this.router.navigate(['new'], {relativeTo: this.route})
  }

}
