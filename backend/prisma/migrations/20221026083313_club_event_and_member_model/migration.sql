-- CreateEnum
CREATE TYPE "ClubEventStatusEnum" AS ENUM ('IN_REVIEW', 'ONGOING', 'CANCELLED', 'AWAITING');

-- CreateEnum
CREATE TYPE "ClubMemberStatusEnum" AS ENUM ('ACTIVE', 'INACTIVE', 'LEFT', 'PREMIUM');

-- CreateEnum
CREATE TYPE "ClubMemberEventStatusEnum" AS ENUM ('JOINED', 'LEFT');

-- CreateEnum
CREATE TYPE "ClubMemberEventAttendanceEnum" AS ENUM ('PRESENT', 'ABSENT', 'LEAVE');

-- CreateTable
CREATE TABLE "ClubMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "status" "ClubMemberStatusEnum" NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClubMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubEvent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "memberOnly" BOOLEAN NOT NULL DEFAULT false,
    "changed" BOOLEAN NOT NULL DEFAULT false,
    "status" "ClubEventStatusEnum" NOT NULL DEFAULT 'IN_REVIEW',
    "thumbnail" TEXT,
    "clubId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClubEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubMemberEvent" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "status" "ClubMemberEventStatusEnum" NOT NULL DEFAULT 'JOINED',
    "attendance" "ClubMemberEventAttendanceEnum" NOT NULL DEFAULT 'ABSENT',

    CONSTRAINT "ClubMemberEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_userId_clubId_key" ON "ClubMember"("userId", "clubId");

-- AddForeignKey
ALTER TABLE "ClubMember" ADD CONSTRAINT "ClubMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubMember" ADD CONSTRAINT "ClubMember_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubEvent" ADD CONSTRAINT "ClubEvent_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubMemberEvent" ADD CONSTRAINT "ClubMemberEvent_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "ClubMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubMemberEvent" ADD CONSTRAINT "ClubMemberEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "ClubEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
