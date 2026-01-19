import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employees } from './employees';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
title = 'services-demo';
public employees: {
id: number;
firstname: string;
lastname: string;
email: string;
} []= [];

public products: {
productId: string;
productName: string;
description: string;
price: string;
} []= [];

constructor(private _employees: Employees, private _products: Products){}

ngOnInit() {
  this.employees = this._employees.getEmployees();
  this.products = this._products.getProducts();
}



}
