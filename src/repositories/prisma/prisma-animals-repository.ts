import { prisma } from "../../prisma";
import { AnimalsCreateData, AnimalsList, AnimalsRepository } from "../animals-repository";

export class PrismaAnimalsRepository implements AnimalsRepository {
  async create({ name, id_animalSpecies, size, age, city, uf, description, whatsapp, user }: AnimalsCreateData) {
    await prisma.animals.create({
      data: {
        name,
        id_animalSpecies,
        size,
        age,
        city,
        uf,
        description,
        whatsapp,
        user,
      }
    })
  }

  async list() {
    const listAnimals = await prisma.animals.findMany({
      include: {
        animalSpecies: true
      }
    }) as AnimalsList[]

    return listAnimals;
  }


  async listByUserId(id: number) {
    const listByUserId = await prisma.animals.findMany({
      where: {
        user: id,
      },
      include: {
        animalSpecies: true
      }
    }) as AnimalsList[]

    return listByUserId;
  };

  async delete(id: number) {
    await prisma.animals.delete({
      where: {
        id: id,
      }
    }) 
    
  };

}