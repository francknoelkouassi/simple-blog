import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interface/post';

@Component({
  selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    @Input() posts: Post[];

  constructor() {
  }

  ngOnInit() {
  }

}
