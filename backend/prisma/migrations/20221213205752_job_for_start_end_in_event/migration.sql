/*
  Warnings:

  - You are about to drop the column `notificationJobId` on the `ClubEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClubEvent" DROP COLUMN "notificationJobId",
ADD COLUMN     "eventEndJobId" TEXT,
ADD COLUMN     "eventStartJobId" TEXT;
