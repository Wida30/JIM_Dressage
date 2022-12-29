import { CaballosComponent } from './pages/nosotros/caballos/caballos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InstalacionesComponent } from './pages/nosotros/instalaciones/instalaciones.component';

const routes: Routes = [
{path: "", pathMatch: "full", component: HomeComponent},
{path: "nosotros", component: NosotrosComponent},
{path: "instalaciones", component: InstalacionesComponent},
{path: "caballos", component: CaballosComponent},
{path: "actividades", component: ActividadesComponent},
{path: "contacta", component: ContactaComponent},
{path: "admin", component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


