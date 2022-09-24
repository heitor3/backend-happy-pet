import { AnimalsRepository } from "../repositories/animals-repository";

export class DeleteAnimals {
  constructor(
    private animalsRepository: AnimalsRepository
  ) { }

  async delete(id: number) {
    await this.animalsRepository.delete(id)
  }
}