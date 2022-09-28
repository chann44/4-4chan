-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_boardId_fkey";

-- AlterTable
ALTER TABLE "post" ALTER COLUMN "boardId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
