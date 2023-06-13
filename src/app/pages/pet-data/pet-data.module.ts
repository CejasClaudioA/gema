import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetDataViewComponent } from './components/pet-data-view/pet-data-view.component';
import { PetDataFormComponent } from './components/pet-data-form/pet-data-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PetDataRoutingModule } from './pet-data-routing.module';

@NgModule({
  declarations: [PetDataViewComponent, PetDataFormComponent],
  imports: [CommonModule, MaterialModule, SharedModule, PetDataRoutingModule],
})
export class PetDataModule {}
