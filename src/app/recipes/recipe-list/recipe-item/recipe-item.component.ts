import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeServiceService } from '../../recipe-service.service';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
  }

  //Event binding to catch data from html to ts file
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
