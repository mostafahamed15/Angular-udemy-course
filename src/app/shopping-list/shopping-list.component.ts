import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from './shopping-list-service.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListServiceService) { }

  ngOnInit() {

    this.ingredients = this.slService.getIngredient();
    this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    )
  }



}
