import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  idPost!: string;

  constructor( private activatedRoute: ActivatedRoute ) { 
    this.activatedRoute.params.subscribe(({idPost})=>{
      this.idPost = idPost;
    });
    
  }

  ngOnInit(): void {
  }

}
