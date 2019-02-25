import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, shareReplay, share } from 'rxjs/operators';

interface Post {
  id: number,
  siteId: number,
  title: string
}

interface Response {
  found: number,
  posts: Post
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private isLoading: boolean = false

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get<Response>('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=3')
    .pipe(
      map(data => data.posts),
      shareReplay(),
      share()
    )
    // .pipe(
    //   catchError(this.handleError('getPosts', []))
    // )
  }
}
