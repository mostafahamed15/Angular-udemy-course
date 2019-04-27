import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list/shopping-list-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipesChanged = new Subject<Recipe[]>();


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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
