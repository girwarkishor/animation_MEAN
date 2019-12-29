import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any = [];
  postForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder, private router: Router) {
    this.postForm = fb.group({
      title : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
      url : [null, Validators.required],
      description : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])]
    });
    }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data;
      });
  }

  addPost(post: Post){
    this.postService.insertPost(post).subscribe(data => {
      this.posts.push(data);
      this.router.navigateByUrl('/');
    });
  }

}
