-- CreateTable
CREATE TABLE `Notices` (
    `id` CHAR(25) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` CHAR(25) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `student_id` VARCHAR(191) NOT NULL,
    `semester_id` INTEGER NOT NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `teacher_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`teacher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tokens` (
    `id` VARCHAR(191) NOT NULL,
    `token` CHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `subject_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `semester_id` INTEGER NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `id` VARCHAR(191) NOT NULL,
    `attendance_count` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tokens` ADD CONSTRAINT `Tokens_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`teacher_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
