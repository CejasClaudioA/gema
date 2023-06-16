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
    this.petDataService.getAllPet().subscribe(v=>console.log(v));

    this.petForm = new FormGroup({
      nombre: new FormControl<String>('Gema'),
      especie: new FormControl<String>('Perro'),
      raza: new FormControl<String>('Bulldog Francés'),
      nacimiento: new FormControl<String>(this.getFormattedDate('21/07/2022')),
      color: new FormControl<String>('Atigrado y blanco'),
      microchip: new FormControl<String>('548648754'),
      sexo: new FormControl<String>('1')
    });
  }

  onSubmit() {
    this.petDataService.savePet(this.buildPet()).subscribe();
  }

  getFormattedDate(dateString: string): String {
    const date = moment(dateString);
    return date.format('DD/MM/YYYY');
  }

  buildPet(): Pet{
    const { nombre, especie, raza, nacimiento, color, microchip, sexo } = this.petForm.value;
    const pet: Pet = {
      nombre, 
      especie, 
      raza, 
      nacimiento, 
      color, 
      microchip,
      sexo: {
        id: sexo
      }
    }
    console.log(pet);
    return pet;
  }
}
