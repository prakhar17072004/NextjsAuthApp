CREATE TABLE "users" (
	"userName" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"passward" varchar(50) NOT NULL,
	"isVerified" boolean DEFAULT false,
	"isBabu" boolean DEFAULT false,
	"isAdmin" boolean DEFAULT false,
	"forgetPasswardToken" varchar(255),
	"forgetPassToken_Expiry" timestamp with time zone,
	"verifyToken" varchar(255),
	"verifyToken_Expiry" timestamp with time zone,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
