/*
  Warnings:

  - A unique constraint covering the columns `[userId,eventId]` on the table `ClubEventMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ClubEventMember_userId_eventId_key" ON "ClubEventMember"("userId", "eventId");
