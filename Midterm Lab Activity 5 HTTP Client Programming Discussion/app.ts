import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
protected readonly title = signal('http-client-demo');
  httpusers: User[] = []; // Store user data [cite: 32]
  httpproducts: Product[] = []; // Store product data

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    // Pulling user data [cite: 32]
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    // Pulling filtered product data [cite: 47, 48]
    this.httpClient.getProductsLimited().subscribe((data) => {
      this.httpproducts = data;
    });
  }
}
