/*
  Warnings:

  - You are about to drop the column `content` on the `Announcement` table. All the data in the column will be lost.
  - Added the required column `english_content` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `french_content` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Announcement` DROP COLUMN `content`,
    ADD COLUMN `english_content` VARCHAR(191) NOT NULL,
    ADD COLUMN `french_content` VARCHAR(191) NOT NULL;
