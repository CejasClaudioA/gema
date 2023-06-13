import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pet-data',
    loadChildren: () =>
      import('./pages/pet-data/pet-data.module').then((m) => m.PetDataModule),
  },
  // {path:'employee', loadChildren: () => import('./page/employee-portal/employee-portal.module').then(m => m.EmployeePortalModule)},

  { path: '', redirectTo: 'pet-data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
