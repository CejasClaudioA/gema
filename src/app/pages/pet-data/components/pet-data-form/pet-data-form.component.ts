import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { PetDataService } from '../../services/pet-data.service';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-pet-data-form',
  templateUrl: './pet-data-form.component.html',
  styleUrls: ['./pet-data-form.component.scss'],
})
export class PetDataFormComponent implements OnInit {
  petForm!: FormGroup;

  constructor(private petDataService: PetDataService) {}

  ngOnInit(): void {
    this.petForm = new FormGroup({
      nombre: new FormControl<String>(''),
      especie: new FormControl<String>(''),
      raza: new FormControl<String>(''),
      nacimiento: new FormControl<String>(this.getFormattedDate('21/07/2022')),
      genero: new FormControl<String>(''),
    });
  }

  onSubmit() {
    console.log(this.petForm.value);
    this.petDataService.savePet(this.petForm.value);
  }

  getFormattedDate(dateString: string): string {
    const date = moment(dateString);
    return date.format('DD/MM/YYYY');
  }
}
