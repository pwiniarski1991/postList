import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PostsService } from '../posts.service';
import {Observable, Subscription} from 'rxjs';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts$: Object;
  postsSubscription: Subscription;
  @ViewChildren(CommentComponent) comments: QueryList<CommentComponent>;

  constructor(private postsService: PostsService ) {
    
  }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postsService.getPosts()
    .subscribe(
      posts => this.posts$ = posts,
      err => console.error('error: ', err),
      () => console.log('complete')

    );
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
