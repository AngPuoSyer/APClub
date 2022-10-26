/*
  Warnings:

  - A unique constraint covering the columns `[userId,clubId]` on the table `ClubAdmin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ClubAdmin_userId_clubId_key" ON "ClubAdmin"("userId", "clubId");
