import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  idExpert!:number;
  
  constructor( private activatedRoute: ActivatedRoute ) { 
    this.activatedRoute.parent?.params
      .subscribe(({idExperto})=>{
        this.idExpert = idExperto;      
      });
  }

  ngOnInit(): void {
  }

}
