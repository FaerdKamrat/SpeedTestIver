-- CreateTable
CREATE TABLE "SpeedCheck" (
    "id" SERIAL NOT NULL,
    "resultId" TEXT NOT NULL,
    "download" INTEGER NOT NULL,
    "upload" INTEGER NOT NULL,
    "Lidle" DOUBLE PRECISION NOT NULL,
    "Ldownload" DOUBLE PRECISION NOT NULL,
    "Lupload" DOUBLE PRECISION NOT NULL,
    "ip" TEXT NOT NULL,
    "server" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "SpeedCheck_id_key" ON "SpeedCheck"("id");
