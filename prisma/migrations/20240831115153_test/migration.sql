/*
  Warnings:

  - You are about to alter the column `price` on the `item` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(14,4)`.
  - You are about to alter the column `totalPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(14,4)`.
  - A unique constraint covering the columns `[email]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document]` on the table `client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "item" ALTER COLUMN "price" SET DATA TYPE DECIMAL(14,4);

-- AlterTable
ALTER TABLE "order" ALTER COLUMN "totalPrice" SET DATA TYPE DECIMAL(14,4);

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_document_key" ON "client"("document");
