import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentComponent } from './comment/comment.component';
import { StripHTMLPipe } from './custompipe/strip-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentComponent,
    StripHTMLPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
