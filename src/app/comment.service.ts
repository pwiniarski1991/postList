import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter,  map, tap, shareReplay, mergeMap, retry } from 'rxjs/operators';

interface Comment {
  content: string,
  date: Date
}

interface Response {
  comments: Comment[]
}

interface post {
  ID: number,
  site_ID: number
}


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  getPostComment(post) {
    return this.http.get<Response>(`https://public-api.wordpress.com/rest/v1.1/sites/${post.site_ID}/posts/${post.ID}/replies?number=1`)
      .pipe(
        filter(data => data.comments.length !== 0),
        map(data => data.comments[0]),
        retry(3),
        shareReplay()
      )
  }
      
}
