import { Injectable} from '@angular/core';
import { Ingredient }  from '../shared/ingredient.model';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  ingredientChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Appels', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredient () {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredients (index: number) {
    return this.ingredients[index];
  }

  updateIngredient( index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
