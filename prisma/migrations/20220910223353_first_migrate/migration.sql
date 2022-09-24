-- CreateTable
CREATE TABLE "animalSpecies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "screenShot" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "animals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "id_animalSpecies" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "user" INTEGER,
    CONSTRAINT "animals_id_animalSpecies_fkey" FOREIGN KEY ("id_animalSpecies") REFERENCES "animalSpecies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
