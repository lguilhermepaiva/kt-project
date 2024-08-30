-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bornDate" TIMESTAMP(3) NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);
