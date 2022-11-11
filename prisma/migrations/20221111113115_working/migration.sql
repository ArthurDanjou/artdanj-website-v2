/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `GuestBook` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `User`;

-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `GuestBook` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `updatedAt`;
