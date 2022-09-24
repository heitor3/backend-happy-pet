import { AnimalsRepository } from "../repositories/animals-repository";

interface CreateAninalsRequest {
  name: string;
  id_animalSpecies: number;
  size: string;
  age: string;
  city: string;
  uf: string;
  description: string;
  whatsapp: string;
  user: number;
}

export class CreateAninals {
  constructor(
    private animalsRepository: AnimalsRepository
  ) { }

  async create(request: CreateAninalsRequest) {
    const { name, id_animalSpecies, size, age, city, uf, description, whatsapp, user } = request;

    await this.animalsRepository.create({
      name,
      id_animalSpecies,
      size,
      age,
      city,
      uf,
      description,
      whatsapp,
      user
    })
  }
}