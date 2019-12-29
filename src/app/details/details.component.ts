import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  postDetails$: Observable<Post>;
  selectedId: number;

  post: any;
  constructor(private postService: PostService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params.id;
    this.postService.getPost(id).subscribe(
      data => {
        console.log(data);
        this.post = data;
      }
    );
  }
}
