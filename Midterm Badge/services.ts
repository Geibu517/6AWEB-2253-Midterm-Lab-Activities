import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DataService } from '../data.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

  search$ = new BehaviorSubject('');
  filteredPosts$;

  constructor(private data: DataService) {
    this.filteredPosts$ = combineLatest([
      this.data.posts$,
      this.search$
    ]).pipe(
      map(([posts, search]) =>
        posts.filter(p =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.body.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  onSearch(value: string) {
    this.search$.next(value);
  }
}
