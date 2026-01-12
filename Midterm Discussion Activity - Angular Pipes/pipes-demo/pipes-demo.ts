import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, JsonPipe, AsyncPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  name = "Tienzo, Gabriel";
  price = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Strawberry", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  percentage: number = 0.256;
  user = { name: 'Gabriel', age: 21, course: 'BSIT'};
  messagePromise = Promise.resolve('Hello from Promise!');
  message$: Observable<string> = of('Hello from Async Pipe!');
}
