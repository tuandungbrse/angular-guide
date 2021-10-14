import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spring Roll',
      'A very popular food in Vietnam',
      'https://lh3.googleusercontent.com/proxy/ma3s2nNuGNlZNhfCI0dPheM-n3KUSJPktzWlSxrxDWW2AT-FUkF3k0v46DAeyid21v8Ty0RJThU5af3Qkz1Tr2Nc8ko4d6d7L4VaDuEid-DpLcoG8Bh3SQ'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
