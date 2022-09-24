import { AnimalsRepository } from "../repositories/animals-repository";


export class ListByUserId {
  constructor(
    private animalsRepository: AnimalsRepository
  ) { }

  async list(id: number) {

    const list = await this.animalsRepository.listByUserId(id)
    return list;
  }
}