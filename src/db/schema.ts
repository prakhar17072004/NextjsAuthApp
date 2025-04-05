
import {  pgTable, varchar,boolean,timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user", {

  userName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  passward:varchar({length:50}).notNull(),
  isVerified: boolean().default(false),
  isBabu:boolean().default(false),
  isAdmin:boolean().default(false),
  forgetPasswardToken: varchar("forgetPasswardToken", { length: 255 }), // Increased length for security
  forgetPasswardTokenExpiry: timestamp("forgetPassToken_Expiry", { withTimezone: true }), // Use timestamp with timezone for expiry
  verifyToken: varchar("verifyToken", { length: 255 }), // Increased length for security
  verifyTokenExpiry: timestamp("verifyToken_Expiry", { withTimezone: true }), // Use timestamp with timezone for expiry
}); 
