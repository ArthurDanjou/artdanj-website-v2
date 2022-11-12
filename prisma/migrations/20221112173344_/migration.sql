/*
  Warnings:

  - You are about to drop the column `userId` on the `GuestBook` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `GuestBook` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `GuestBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `GuestBook` DROP FOREIGN KEY `GuestBook_userId_fkey`;

-- AlterTable
ALTER TABLE `GuestBook` DROP COLUMN `userId`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `GuestBook_userEmail_key` ON `GuestBook`(`userEmail`);

-- AddForeignKey
ALTER TABLE `GuestBook` ADD CONSTRAINT `GuestBook_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
