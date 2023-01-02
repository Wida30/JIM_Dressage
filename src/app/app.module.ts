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



import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InstalComponent } from './pages/instal/instal.component';
import { RecintoComponent } from './pages/instal/recinto/recinto.component';



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
    
    InstalComponent,
         RecintoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
