import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list/shopping-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe (
  'A Test recipe',
  'This is simply a test',
  'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
  [
    new Ingredient ('Meat', 1),
    new Ingredient ( 'French Fries', 20)
  ]  ),  
    new Recipe (
  'A notherTest recipe', 
  'This is simply a test', 
  'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
  [
    new Ingredient ('Burger', 3),
    new Ingredient ( 'Meat', 20)
  ])
  ];
  constructor(private slService: ShoppingListServiceService) { }

  getRecipes() {
   return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
