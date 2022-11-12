/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GuestBook` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `GuestBook_userId_key` ON `GuestBook`(`userId`);
