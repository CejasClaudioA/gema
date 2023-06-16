import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PetDataService {
  private base_url;

  constructor(private http: HttpClient) {
    this.base_url = environment.apiUrl;
  }

  public getAllPet() {
    let url = `${this.base_url}/mascota`;
    return this.http.get<Pet>(url);
  }

  public savePet(pet: Pet) {
    let url = `${this.base_url}/mascota`;
    return this.http.post<Pet>(url, pet);
  }
}
