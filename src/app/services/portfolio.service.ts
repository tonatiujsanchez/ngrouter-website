import { Injectable } from '@angular/core';
import { Portfolio, Categoria } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  categorias:Categoria[] = [
    {
      idc: 'all',
      nombre: 'Todos'
    },
    {
      idc: 'c01',
      nombre: 'Frontend'
    },
    {
      idc: 'c02',
      nombre: 'Backend'
    },
    {
      idc: 'c03',
      nombre: 'Móvil'
    },
    {
      idc: 'c04',
      nombre: 'Web Design'
    }
  ];

  private proyectos:Portfolio[]  = [
    {
      nombre: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
      foto: 'porfolio-101',
      categoria: 'c01'
    },
    {
      nombre: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
      foto: 'porfolio-102',
      categoria: 'c02'
    },
    {
      nombre: 'Project Title',
      desc: 'Adipisicing elit. Odit sequi lorem ipsum.',
      foto: 'porfolio-103',
      categoria: 'c01'
    },
    {
      nombre: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet.',
      foto: 'porfolio-104',
      categoria: 'c01'
    },
    {
      nombre: 'Project Title',
      desc: 'Ipsum dolor sit amet consectetur.',
      foto: 'porfolio-105',
      categoria: 'c02'
    },
    {
      nombre: 'Project Title',
      desc: 'Odit sequi vel sapiente a dignissimos.',
      foto: 'porfolio-106',
      categoria: 'c02'
    },
    {
      nombre: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet.',
      foto: 'porfolio-107',
      categoria: 'c04'
    },
    {
      nombre: 'Project Title',
      desc: 'Sequi vel sapiente dolores a dignissimos.',
      foto: 'porfolio-108',
      categoria: 'c03'
    },
    {
      nombre: 'Project Title',
      desc: 'Sit amet consectetur adipisicing elit.',
      foto: 'porfolio-109',
      categoria: 'c04'
    },
    {
      nombre: 'Project Title',
      desc: 'Lorem ipsum a dignissimos repellat.',
      foto: 'porfolio-110',
      categoria: 'c04'
    },
    {
      nombre: 'Project Title',
      desc: 'Odit sequi vel sapiente dolores.',
      foto: 'porfolio-111',
      categoria: 'c03'
    }
  ];

  get allCategorias(): Categoria[]{
    return this.categorias;
  }


  constructor() { }

  getProyectos( idc: string ): Portfolio[]{
    if(idc == 'all'){
      return this.proyectos;
    }else{
      return this.proyectos.filter( proyecto => proyecto.categoria == idc );
    }
  }



}
