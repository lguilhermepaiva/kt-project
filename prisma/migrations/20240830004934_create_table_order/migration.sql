-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_itemToorder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_itemToorder_AB_unique" ON "_itemToorder"("A", "B");

-- CreateIndex
CREATE INDEX "_itemToorder_B_index" ON "_itemToorder"("B");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_itemToorder" ADD CONSTRAINT "_itemToorder_A_fkey" FOREIGN KEY ("A") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_itemToorder" ADD CONSTRAINT "_itemToorder_B_fkey" FOREIGN KEY ("B") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
