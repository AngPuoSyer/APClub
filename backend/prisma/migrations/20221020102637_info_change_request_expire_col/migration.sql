/*
  Warnings:

  - Added the required column `clubAdminStatus` to the `ClubAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expireDate` to the `ClubInfoChangeRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClubAdminStatusEnum" AS ENUM ('ACTIVE', 'RETIRED', 'IN_REVIEW');

-- DropForeignKey
ALTER TABLE "ClubInfoChangeAdminRequest" DROP CONSTRAINT "ClubInfoChangeAdminRequest_clubChangeRequestId_fkey";

-- DropForeignKey
ALTER TABLE "ClubInfoChangeRequest" DROP CONSTRAINT "ClubInfoChangeRequest_clubId_fkey";

-- DropForeignKey
ALTER TABLE "ClubInfoChangeRequest" DROP CONSTRAINT "ClubInfoChangeRequest_requesterId_fkey";

-- AlterTable
ALTER TABLE "ClubAdmin" ADD COLUMN     "clubAdminStatus" "ClubAdminStatusEnum" NOT NULL;

-- AlterTable
ALTER TABLE "ClubInfoChangeRequest" ADD COLUMN     "expireDate" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeRequest" ADD CONSTRAINT "ClubInfoChangeRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "ClubAdmin"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeRequest" ADD CONSTRAINT "ClubInfoChangeRequest_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeAdminRequest" ADD CONSTRAINT "ClubInfoChangeAdminRequest_clubChangeRequestId_fkey" FOREIGN KEY ("clubChangeRequestId") REFERENCES "ClubInfoChangeRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
