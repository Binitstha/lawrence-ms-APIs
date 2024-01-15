/*
  Warnings:

  - You are about to drop the `Notices1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Notices1`;

-- DropTable
DROP TABLE `test1`;

-- CreateTable
CREATE TABLE `Notices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
