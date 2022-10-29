/*
  Warnings:

  - You are about to drop the column `memberId` on the `ClubEventMember` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ClubEventMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClubEventMember" DROP CONSTRAINT "ClubEventMember_memberId_fkey";

-- AlterTable
ALTER TABLE "ClubEventMember" DROP COLUMN "memberId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ClubEventMember" ADD CONSTRAINT "ClubEventMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
