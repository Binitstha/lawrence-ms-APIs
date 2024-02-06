-- DropForeignKey
ALTER TABLE `Attendance` DROP FOREIGN KEY `Attendance_id_fkey`;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
