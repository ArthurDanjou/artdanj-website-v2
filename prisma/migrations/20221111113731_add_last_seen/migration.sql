-- AlterTable
ALTER TABLE `User` ADD COLUMN `lastSeen` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
