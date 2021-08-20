import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../interfaces/portfolio.interface';
import {Location} from '@angular/common';
@Component({
  selector: 'app-proyecto-details',
  templateUrl: './proyecto-details.component.html',
  styleUrls: ['./proyecto-details.component.css']
})
export class ProyectoDetailsComponent implements OnInit, OnDestroy {
  body = document.querySelector('body');
  proyecto!:Portfolio;

  get bgHero():string{
    return `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('../../../assets/img/portfolio/${this.proyecto.foto}.jpg')`;
  }
  constructor( private activatedRoute: ActivatedRoute,  
                private portfolioService: PortfolioService,
                private location: Location ) {

    this.activatedRoute.params
      .subscribe( ( {idProyecto} ) =>{
        console.log(idProyecto);
        this.proyecto = this.portfolioService.getProyecto( idProyecto );
      });
    }
    
  ngOnInit(): void {
    this.body?.classList.add('fijar-body');
  }

  regresar(){
    this.location.back();
  }



  ngOnDestroy(): void{
    this.body?.classList.remove('fijar-body');
  }
}
