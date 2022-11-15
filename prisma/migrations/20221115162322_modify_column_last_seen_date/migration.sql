/*
  Warnings:

  - Made the column `lastSeenDate` on table `card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `card` MODIFY `lastSeenDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
