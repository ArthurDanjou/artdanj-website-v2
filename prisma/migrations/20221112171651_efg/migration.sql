/*
  Warnings:

  - You are about to drop the column `guestbookId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `GuestBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_guestbookId_fkey`;

-- AlterTable
ALTER TABLE `GuestBook` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `guestbookId`;

-- CreateIndex
CREATE INDEX `GuestBook_userId_idx` ON `GuestBook`(`userId`);

-- AddForeignKey
ALTER TABLE `GuestBook` ADD CONSTRAINT `GuestBook_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
