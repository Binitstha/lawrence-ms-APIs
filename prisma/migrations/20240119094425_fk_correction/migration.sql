/*
  Warnings:

  - Added the required column `assignedDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Assignment` ADD COLUMN `assignedDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `dueDate` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `events` (
    `id` CHAR(25) NOT NULL,
    `events` VARCHAR(191) NOT NULL,
    `eventDesc` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `venue` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` CHAR(25) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `subject_code` VARCHAR(191) NOT NULL,
    `mark` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `question_question_year_key`(`question`, `year`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
