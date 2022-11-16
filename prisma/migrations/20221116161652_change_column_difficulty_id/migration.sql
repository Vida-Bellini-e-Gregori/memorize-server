/*
  Warnings:

  - You are about to drop the column `difficultyId` on the `card` table. All the data in the column will be lost.
  - Added the required column `difficulty` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_difficultyId_fkey`;

-- AlterTable
ALTER TABLE `card` DROP COLUMN `difficultyId`,
    ADD COLUMN `difficulty` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_difficulty_fkey` FOREIGN KEY (`difficulty`) REFERENCES `Difficulty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
