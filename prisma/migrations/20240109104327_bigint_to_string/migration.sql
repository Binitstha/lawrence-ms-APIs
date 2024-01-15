/*
  Warnings:

  - The primary key for the `Students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Subjects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teachers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tokens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Students` DROP FOREIGN KEY `Students_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `Subjects` DROP FOREIGN KEY `Subjects_teacher_id_fkey`;

-- DropForeignKey
ALTER TABLE `Teachers` DROP FOREIGN KEY `Teachers_teacher_id_fkey`;

-- DropForeignKey
ALTER TABLE `Tokens` DROP FOREIGN KEY `Tokens_id_fkey`;

-- AlterTable
ALTER TABLE `Students` DROP PRIMARY KEY,
    MODIFY `student_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`student_id`);

-- AlterTable
ALTER TABLE `Subjects` DROP PRIMARY KEY,
    MODIFY `subject_id` VARCHAR(191) NOT NULL,
    MODIFY `teacher_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`subject_id`);

-- AlterTable
ALTER TABLE `Teachers` DROP PRIMARY KEY,
    MODIFY `teacher_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`teacher_id`);

-- AlterTable
ALTER TABLE `Tokens` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` CHAR(25) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tokens` ADD CONSTRAINT `Tokens_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`teacher_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
