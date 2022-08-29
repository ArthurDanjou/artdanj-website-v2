/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Form_email_key` ON `Form`(`email`);
