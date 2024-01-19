/*
  Warnings:

  - A unique constraint covering the columns `[question,year]` on the table `question` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `question_question_year_key` ON `question`;

-- AlterTable
ALTER TABLE `question` MODIFY `question` LONGTEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `question_question_year_key` ON `question`(`question`(100), `year`);
