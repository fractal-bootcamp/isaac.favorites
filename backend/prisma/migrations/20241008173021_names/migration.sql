/*
  Warnings:

  - Added the required column `name` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "name" TEXT NOT NULL;
