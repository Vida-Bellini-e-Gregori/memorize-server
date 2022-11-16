/*
  Warnings:

  - Added the required column `label` to the `Difficulty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `difficulty` ADD COLUMN `label` VARCHAR(191) NOT NULL;
