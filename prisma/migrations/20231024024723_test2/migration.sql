/*
  Warnings:

  - You are about to drop the column `userId` on the `UserPreferenece` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPrefereneceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserPreferenece" DROP CONSTRAINT "UserPreferenece_userId_fkey";

-- DropIndex
DROP INDEX "UserPreferenece_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPrefereneceId" TEXT;

-- AlterTable
ALTER TABLE "UserPreferenece" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPrefereneceId_key" ON "User"("userPrefereneceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPrefereneceId_fkey" FOREIGN KEY ("userPrefereneceId") REFERENCES "UserPreferenece"("id") ON DELETE SET NULL ON UPDATE CASCADE;
