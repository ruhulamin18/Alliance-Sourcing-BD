/*
  Warnings:

  - Made the column `category` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "subcategory" TEXT,
ALTER COLUMN "category" SET NOT NULL;
