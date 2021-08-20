import { Component, OnInit } from '@angular/core';
import { Categoria, Portfolio } from '../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/portfolio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriaActiva: string = 'all';
  categorias: Categoria[];

  proyectos: Portfolio[] = [];

  constructor( private portfolioService: PortfolioService,
                private router: Router,
                private activatedRoute: ActivatedRoute  ) {
    this.categorias = this.portfolioService.allCategorias;
   }

  ngOnInit(): void {
    this.proyectos = this.portfolioService.getProyectos( this.categoriaActiva );
  }

  getClassActive( idc:string ):boolean{
    return this.categoriaActiva === idc;
  }

  categoriaSelected( idc: string ){
    if( this.categoriaActiva ===  idc ){
      return;
    }

    this.categoriaActiva = idc;
    this.proyectos = this.portfolioService.getProyectos( idc );
  }

  verProyecto( idFoto:string ){
    this.router.navigate(['proyecto-details', idFoto], {relativeTo: this.activatedRoute});
  }
  verEntrada( idEntrada:number ){
    this.router.navigate(['/blog', idEntrada]);
  }

}
