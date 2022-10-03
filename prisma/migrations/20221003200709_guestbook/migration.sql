/*
  Warnings:

  - You are about to drop the column `english_content` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `french_content` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `GuestBook` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `GuestBook` table. All the data in the column will be lost.
  - Added the required column `content` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `GuestBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `GuestBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Announcement` DROP COLUMN `english_content`,
    DROP COLUMN `french_content`,
    DROP COLUMN `title`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `GuestBook` DROP COLUMN `message`,
    DROP COLUMN `name`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
