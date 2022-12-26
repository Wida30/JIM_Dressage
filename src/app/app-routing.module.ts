import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
{path: "", pathMatch: "full", component: HomeComponent},
{path: "nosotros", component: NosotrosComponent},
{path: "actividades", component: ActividadesComponent},
{path: "contacta", component: ContactaComponent},
{path: "admin", component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


