/*
  Warnings:

  - The primary key for the `Notices` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Notices` DROP PRIMARY KEY,
    MODIFY `id` CHAR(25) NOT NULL,
    ADD PRIMARY KEY (`id`);
