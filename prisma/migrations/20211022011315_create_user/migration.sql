-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "login" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
