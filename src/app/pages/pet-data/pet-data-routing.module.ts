import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDataViewComponent } from './components/pet-data-view/pet-data-view.component';

const routes: Routes = [{ path: '', component: PetDataViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetDataRoutingModule {}
