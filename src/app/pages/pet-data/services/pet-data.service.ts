import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root',
})
export class PetDataService {
  private base_url;

  constructor(private http: HttpClient) {
    this.base_url = '192.168.1.9:3000/api';
  }

  public savePet(pet: Pet) {
    let url = `${this.base_url}/mascota`;
    return this.http.post<Pet>(url, pet);
  }
}
