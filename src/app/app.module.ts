import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Pages
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { ExpertoComponent } from './components/experto/experto.component';

// Shared components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';


// Children
import { ArticulosComponent } from './experto-detalles/articulos/articulos.component';
import { ProyectosComponent } from './experto-detalles/proyectos/proyectos.component';
import { ExperienciaComponent } from './experto-detalles/experiencia/experiencia.component';
import { SentenceComponent } from './components-generic/sentence/sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ExpertoComponent,
    ArticulosComponent,
    ProyectosComponent,
    ExperienciaComponent,
    SentenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
