import {AfterViewInit, Component, ContentChild, OnInit} from '@angular/core';
import {PostItemComponent} from "../post-item/post-item.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, AfterViewInit{

  @ContentChild(PostItemComponent) postItem?: any;

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('postItem',this.postItem);
  }


}
