import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.baseUri + '/api/posts', {headers: this.headers});
  }

  getPost(id){
    return this.http.get(this.baseUri + '/api/details/' + id, {headers: this.headers});
  }

  insertPost(post: Post){
    return this.http.post(this.baseUri + '/api/posts', JSON.stringify(post), {headers: this.headers});
  }
}
