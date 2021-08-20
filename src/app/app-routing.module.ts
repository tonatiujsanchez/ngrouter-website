import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

import { PostComponent } from './components/post/post.component';
import { ExpertoComponent } from './components/experto/experto.component';

// Chiildren
import { ProyectosComponent } from './experto-detalles/proyectos/proyectos.component';
import { ArticulosComponent } from './experto-detalles/articulos/articulos.component';
import { ExperienciaComponent } from './experto-detalles/experiencia/experiencia.component';
import { ProyectoDetailsComponent } from './components-generic/proyecto-details/proyecto-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent,
    children:[
      { path: 'proyecto-details/:idProyecto', component: ProyectoDetailsComponent },
    ]
  },
  { path: 'info', component: InfoComponent},
  { path: 'experto/:idExperto', component: ExpertoComponent,
    children:[
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'experiencia', component: ExperienciaComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:idPost', component: PostComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// empleados/1234/proyectos