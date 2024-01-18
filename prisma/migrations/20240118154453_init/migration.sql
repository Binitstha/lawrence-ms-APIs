/*
  Warnings:

  - The primary key for the `events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(25)`.
  - The primary key for the `question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `question` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(25)`.

*/
-- AlterTable
ALTER TABLE `events` DROP PRIMARY KEY,
    MODIFY `id` CHAR(25) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `question` DROP PRIMARY KEY,
    MODIFY `id` CHAR(25) NOT NULL,
    ADD PRIMARY KEY (`id`);
