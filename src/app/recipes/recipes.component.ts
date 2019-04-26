import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './recipe-service.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor( private recipeService: RecipeServiceService) { }

  ngOnInit() {
    
  }

}
