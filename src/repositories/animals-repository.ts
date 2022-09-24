export interface AnimalsCreateData {
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

export interface AnimalsList {
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

export interface AnimalsRepository {
  create: (data: AnimalsCreateData) => Promise<void>;
  list: () => Promise<AnimalsList[]>;
  listByUserId: (id: number) => Promise<AnimalsList[]>;
  delete: (id: number) => Promise<void>;
}