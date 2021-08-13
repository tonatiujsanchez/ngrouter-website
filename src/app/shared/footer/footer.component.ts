import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  rutaActiva:string = '/home';
  getActive( ruta:string ):boolean{
    return this.rutaActiva === ruta;
  }

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onNavigate(ruta:string){
    this.router.navigate([ruta]);
    this.rutaActiva = ruta;    
  }
}
