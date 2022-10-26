-- CreateEnum
CREATE TYPE "ClubAdminRoleEnum" AS ENUM ('PRESIDENT', 'VICE_PRESIDENT', 'SECRETARY', 'ASSISTANT_SECRETARY', 'TREASURER', 'ASSISTANT_TREASURER', 'COMMITEE');

-- CreateEnum
CREATE TYPE "ClubStatusEnum" AS ENUM ('ACTIVE', 'INACTIVE', 'INVALIDATED', 'DEPRECATED');

-- CreateEnum
CREATE TYPE "RequestStatusEnum" AS ENUM ('UNDER_REVIEW', 'REJECTED', 'APPROVED');

-- CreateEnum
CREATE TYPE "RequestTypeEnum" AS ENUM ('ACTIVITY', 'INFORMATION', 'COMMITEE');

-- CreateTable
CREATE TABLE "ClubAdmin" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "role" "ClubAdminRoleEnum" NOT NULL,
    "roleLabel" TEXT NOT NULL,

    CONSTRAINT "ClubAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ClubStatusEnum" NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubInfoChangeRequest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "changeDescription" TEXT NOT NULL,
    "changeStatus" "RequestStatusEnum" NOT NULL,
    "jobId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ClubStatusEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "requesterId" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,

    CONSTRAINT "ClubInfoChangeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubInfoChangeAdminRequest" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clubChangeRequestId" TEXT NOT NULL,

    CONSTRAINT "ClubInfoChangeAdminRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_name_key" ON "Club"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ClubInfoChangeRequest_name_key" ON "ClubInfoChangeRequest"("name");

-- AddForeignKey
ALTER TABLE "ClubAdmin" ADD CONSTRAINT "ClubAdmin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubAdmin" ADD CONSTRAINT "ClubAdmin_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeRequest" ADD CONSTRAINT "ClubInfoChangeRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "ClubAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeRequest" ADD CONSTRAINT "ClubInfoChangeRequest_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeAdminRequest" ADD CONSTRAINT "ClubInfoChangeAdminRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubInfoChangeAdminRequest" ADD CONSTRAINT "ClubInfoChangeAdminRequest_clubChangeRequestId_fkey" FOREIGN KEY ("clubChangeRequestId") REFERENCES "ClubInfoChangeRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
