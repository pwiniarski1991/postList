import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input() post: Object;
  comment$: Object;
  constructor(private commentService: CommentService) { }

  ngOnInit() {}

  ngOnChanges(changes: {[propName: string]: SimpleChanges}) {
    let key = 'post';
    this.post = changes[key].currentValue;
  }

  getCommentPost(post) {
    return this.commentService.getPostComment(post);
  }

  setCommentPost(comment) {
    this.comment$ = comment;
  }

  onCompleteResponse() {
    return 'done';
  }

  ngOnDestroy() {

  }

}
