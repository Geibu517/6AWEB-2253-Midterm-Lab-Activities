import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { map } from 'rxjs';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  today = new Date();
  latestPosts$;

  constructor(private data: DataService) {
    this.latestPosts$ = this.data.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
