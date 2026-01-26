import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user.model';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class Httpclient {
  constructor(private http: HttpClient) {} // Dependency injection [cite: 40, 41]

  // Main Activity: Fetch Users
  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  // Challenge Activity: Fetch Products and filter to 5 [cite: 47, 48]
  getProductsLimited(): Observable<Product[]> {
    return this.http.get<{products: Product[]}>('https://dummyjson.com/products?limit=5')
      .pipe(map(response => response.products));
  }
}
