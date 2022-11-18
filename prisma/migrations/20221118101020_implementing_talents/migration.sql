/*
  Warnings:

  - Added the required column `logo` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Talent` ADD COLUMN `logo` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NOT NULL,
    ADD COLUMN `work` VARCHAR(191) NOT NULL;
