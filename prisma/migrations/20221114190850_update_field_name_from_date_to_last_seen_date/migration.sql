/*
  Warnings:

  - You are about to drop the column `date` on the `card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `date`,
    ADD COLUMN `lastSeenDate` DATETIME(3) NULL;
