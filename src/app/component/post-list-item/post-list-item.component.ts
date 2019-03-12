import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interface/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  loveIt: number;

  constructor() {
  }

  ngOnInit() {
  }

}
