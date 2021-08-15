import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  idExpert!:number;
  constructor( private activatedRoute:ActivatedRoute ) { 
    this.activatedRoute.parent?.params
      .subscribe(({idExperto})=>{
        this.idExpert = idExperto;
      });
  }

  ngOnInit(): void {
  }

}
