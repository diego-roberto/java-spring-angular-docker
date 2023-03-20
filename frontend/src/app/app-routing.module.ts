import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmpresaComponent } from './views/empresa/empresa.component';

const routes: Routes = [
  { path: 'empresas', loadChildren: () => import('./views/empresa/empresa.module').then(m => m.EmpresaModule) },
  { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'empresas', component: EmpresaComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
