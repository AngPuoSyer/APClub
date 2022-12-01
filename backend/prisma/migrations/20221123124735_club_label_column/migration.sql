/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Club` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Club_label_key" ON "Club"("label");
