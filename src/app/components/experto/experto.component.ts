import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experto',
  templateUrl: './experto.component.html',
  styleUrls: ['./experto.component.css']
})
export class ExpertoComponent implements OnInit {
  idExpert!: number;
  constructor( private activatedRoute:ActivatedRoute ) { 
    this.activatedRoute.params
      .subscribe( ({idExperto}) =>{
        this.idExpert = idExperto;
      });
  }

  ngOnInit(): void {
  }

}
