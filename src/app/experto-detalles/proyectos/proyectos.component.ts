import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  idExpert!: number;
  constructor( private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.parent?.params
      .subscribe(({idExperto})=>{
        this.idExpert = idExperto;
      });  
  }

  ngOnInit(): void {
  }

}
