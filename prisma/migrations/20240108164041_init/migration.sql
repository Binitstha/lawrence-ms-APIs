/*
  Warnings:

  - The primary key for the `Notices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `semester` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notices` DROP PRIMARY KEY,
    MODIFY `id` CHAR(20) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Students` ADD COLUMN `semester` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Teachers` (
    `teacher_id` BIGINT NOT NULL,

    PRIMARY KEY (`teacher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tokens` (
    `id` BIGINT NOT NULL,
    `token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `subject_id` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `teacher_id` BIGINT NOT NULL,

    PRIMARY KEY (`subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tokens` ADD CONSTRAINT `Tokens_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`teacher_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
