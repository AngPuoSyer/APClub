/*
  Warnings:

  - You are about to drop the `ClubMemberEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClubMemberEvent" DROP CONSTRAINT "ClubMemberEvent_eventId_fkey";

-- DropForeignKey
ALTER TABLE "ClubMemberEvent" DROP CONSTRAINT "ClubMemberEvent_memberId_fkey";

-- DropTable
DROP TABLE "ClubMemberEvent";

-- CreateTable
CREATE TABLE "ClubEventMember" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "status" "ClubMemberEventStatusEnum" NOT NULL DEFAULT 'JOINED',
    "attendance" "ClubMemberEventAttendanceEnum" NOT NULL DEFAULT 'ABSENT',

    CONSTRAINT "ClubEventMember_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClubEventMember" ADD CONSTRAINT "ClubEventMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "ClubMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubEventMember" ADD CONSTRAINT "ClubEventMember_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "ClubEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
