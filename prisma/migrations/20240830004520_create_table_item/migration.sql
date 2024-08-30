-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
