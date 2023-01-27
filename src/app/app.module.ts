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

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './core/footer/footer.component';




import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InstalComponent } from './pages/instal/instal.component';
import { RecintoComponent } from './pages/instal/recinto/recinto.component';
import { CaballosComponent } from './pages/instal/caballos/caballos.component';
import { AuthComponent } from './pages/admin/auth/auth.component';
import { AdministradorComponent } from './pages/admin/administrador/administrador.component';
import { FullCalendarModule } from '@fullcalendar/angular';




@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    NosotrosComponent,
    ActividadesComponent,
    ContactaComponent,
    AdminComponent,
  
    HomeComponent,
    FooterComponent,
  
    
    InstalComponent,
         RecintoComponent,
         CaballosComponent,
         AuthComponent,
         AdministradorComponent,
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
