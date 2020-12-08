import { UsersModule } from './@admin/pages/users/users.module';
import { DashboardModule } from './@admin/pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Ruta vacía
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Ruta inexistente
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
