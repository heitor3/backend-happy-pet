import { AnimalsRepository } from "../repositories/animals-repository";

export class ListAnimals {
  constructor(
    private animalsRepository: AnimalsRepository
  ) { }

  async list() {

    const list = await this.animalsRepository.list()
    return list;
  }
}