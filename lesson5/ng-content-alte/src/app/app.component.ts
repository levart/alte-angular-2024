import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {NgFor} from "@angular/common";


export interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent, PostItemComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-content';

  posts:Post[] = [
    {title: 'Post One', body: 'This is the body of post one'},
    {title: 'Post Two', body: 'This is the body of post two'},
    {title: 'Post Three', body: 'This is the body of post three'},
  ]

  trackBy = (index: number, post: any) => index;

  addPost() {
    this.posts.push({title: 'A new post', body: 'A new post body'});
  }

  itemDelete(post: Post) {
    console.log('delete', post);
  }
}
