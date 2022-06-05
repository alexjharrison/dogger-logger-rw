-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERADMIN', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'NON_BINARY');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('RECEIVING', 'ADOPTION');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "photoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "weight" DECIMAL(65,30),
    "breed" TEXT,
    "neutered" BOOLEAN,
    "status" "Status" NOT NULL DEFAULT E'RECEIVING',
    "photoUrl" TEXT,
    "birthday" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walk" (
    "id" SERIAL NOT NULL,
    "dogId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "lengthMinutes" INTEGER NOT NULL,
    "didPoop" BOOLEAN NOT NULL,
    "didPee" BOOLEAN NOT NULL,
    "medicalConcerns" TEXT,
    "numJumps" INTEGER NOT NULL,
    "jumpHandlage" TEXT,
    "numMouthings" INTEGER NOT NULL,
    "mouthingsHandlage" TEXT,
    "dogsSeen" INTEGER NOT NULL,
    "dogsSeenReacted" INTEGER NOT NULL,
    "seenDogReaction" TEXT,
    "otherConcerns" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Walk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RW_DataMigration_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Walk" ADD CONSTRAINT "Walk_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Walk" ADD CONSTRAINT "Walk_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
