
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactaComponent } from './pages/contacta/contacta.component';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';

import { InstalComponent } from './pages/instal/instal.component';

import { RecintoComponent } from './pages/instal/recinto/recinto.component';

const routes: Routes = [
{path: "", pathMatch: "full", component: NosotrosComponent},
{path: "nosotros", component: NosotrosComponent},
{path: "instal", component: InstalComponent},
{path: "actividades", component: ActividadesComponent},
{path: "contacta", component: ContactaComponent},
{path: "admin", component: AdminComponent},
{path: "recinto", component: RecintoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


