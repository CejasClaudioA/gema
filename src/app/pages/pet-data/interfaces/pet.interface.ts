export interface Pet {
  nombre: string;
  especie: string;
  raza: string;
  nacimiento: string;
  color: string,
  microchip: string,
  sexo: Sexo
}

export interface Sexo {
  id: string;
}