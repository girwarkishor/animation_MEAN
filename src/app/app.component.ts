import { Component, OnInit } from '@angular/core';
import { PostService } from './post/post.service';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations] // register the animation
})
export class AppComponent implements OnInit{
  title = 'codepostnet';
  result: any;

  constructor(private postService: PostService){}

  ngOnInit() {
  }
}
