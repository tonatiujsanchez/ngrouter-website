import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-proyecto-details',
  templateUrl: './proyecto-details.component.html',
  styleUrls: ['./proyecto-details.component.css']
})
export class ProyectoDetailsComponent implements OnInit {

  proyecto!:Portfolio;
  constructor( private activatedRoute: ActivatedRoute,  
                private portfolioService: PortfolioService ) {

    this.activatedRoute.params
      .subscribe( ( {idProyecto} ) =>{
        console.log(idProyecto);
        this.proyecto = this.portfolioService.getProyecto( idProyecto );
      });
    }
    
    ngOnInit(): void {
  }

}
