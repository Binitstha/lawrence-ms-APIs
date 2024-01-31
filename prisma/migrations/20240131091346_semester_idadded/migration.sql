/*
  Warnings:

  - Added the required column `semester_id` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Attendance` ADD COLUMN `semester_id` VARCHAR(191) NOT NULL;
