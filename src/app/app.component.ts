import { Component, ViewChild, SimpleChanges } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postList';
  @ViewChild(PostsComponent) posts: PostsComponent
  constructor() {}

  ngOnInit() {

  }

  getCommentPost() {
    const changes= [];
    this.posts.comments.forEach((c,i) => {
      changes[i] = c.getCommentPost(c.post);
    });
    let i = 0;
    const comments = this.posts.comments.toArray();
    concat(...changes).subscribe(
      data => {
        comments[i].setCommentPost(data);
        i++;
      },
      error => console.error('error: ', error),
      () => {
        console.log('completed');
      }
    );
  }

}
