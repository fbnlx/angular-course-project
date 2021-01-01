import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amount: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    const ingredient = new Ingredient(
      this.name.nativeElement.value,
      parseInt(this.amount.nativeElement.value)
    );
    this.shoppingListService.addIngredient(ingredient);
  }
}
