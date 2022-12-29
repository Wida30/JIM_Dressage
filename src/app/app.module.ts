import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavegadorComponent } from './core/navegador/navegador.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { CaballosComponent } from './pages/nosotros/caballos/caballos.component';
import { CaballoDetailComponent } from './pages/nosotros/caballos/caballo-detail/caballo-detail.component';
import { InstalacionesComponent } from './pages/nosotros/instalaciones/instalaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    NosotrosComponent,
    ActividadesComponent,
    ContactaComponent,
    AdminComponent,
    PruebasComponent,
    HomeComponent,
    FooterComponent,
    CaballosComponent,
    CaballoDetailComponent,
    InstalacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
