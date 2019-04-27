import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service'; 
import { Recipe } from '../recipe.model';
import {  Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
   
  subscription: Subscription;

  //recipes array
  recipes: Recipe[];
  

  constructor(private recipeService: RecipeServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
          this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  addNewRecipe() {
       this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }

}
