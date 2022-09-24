import express from 'express';
import { PrismaAnimalsRepository } from './repositories/prisma/prisma-animals-repository';
import { CreateAninals } from './use-cases/create-animals';

export const routes = express.Router();

routes.post('/createpet', async (request, response) => {
  const { name, id_animalSpecies, size, age, city, uf, description, whatsapp, user } = request.body;

  const prismaAnimalsRepository = new PrismaAnimalsRepository()
  const createAninals = new CreateAninals(
    prismaAnimalsRepository
  )

  try {
    await createAninals.create({
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
  } catch (error) {
    return response.status(500).send();
  }

  return response.status(201).send();
});

routes.get('/list', async (request, response) => {

  const prismaAnimalsRepository = new PrismaAnimalsRepository()
  const listAnimals = await prismaAnimalsRepository.list();

  try {
    // response.json({ data: listAnimals });
    return response.json(listAnimals);
  } catch (error) {
    response.status(500).send();
  }

})

routes.get('/list/:id', async (request, response) => {
  const params = request.params.id;
  const id = parseInt(params);
  const prismaAnimalsRepository = new PrismaAnimalsRepository()
  const listAnimalsByUser = await prismaAnimalsRepository.listByUserId(id);

  try {
    response.json(listAnimalsByUser);
  } catch (error) {
    response.status(500).send();
  }
})


routes.delete('/delete/:id', async (request, response) => {
  const params = request.params.id;
  const id = parseInt(params);
  const prismaAnimalsRepository = new PrismaAnimalsRepository()
  try {
    await prismaAnimalsRepository.delete(id);

  } catch (error) {
    return response.status(500).send();
  }

  return response.status(200).send();

})