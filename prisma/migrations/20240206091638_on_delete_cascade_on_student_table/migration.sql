-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_student_id_fkey`;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
