/*
  Warnings:

  - You are about to drop the column `username` on the `GuestBook` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `GuestBook` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_guestbookId_fkey`;

-- DropIndex
DROP INDEX `GuestBook_email_key` ON `GuestBook`;

-- AlterTable
ALTER TABLE `GuestBook` DROP COLUMN `email`,
    DROP COLUMN `username`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_guestbookId_fkey` FOREIGN KEY (`guestbookId`) REFERENCES `GuestBook`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
