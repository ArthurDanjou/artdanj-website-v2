/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Talent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Talent` ADD COLUMN `favorite` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `Talent_name_key` ON `Talent`(`name`);
