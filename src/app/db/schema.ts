import {  text, serial, pgTable, timestamp, numeric } from "drizzle-orm/pg-core";

//👇🏻 users table with its column types
export const tweetsTable = pgTable("tweets", {
    id: serial("id").primaryKey().notNull(),
    owner_id: text("owner_id").notNull(),
    content: text("content").notNull(),
    //followers: text("followers").notNull(),
    created_at: timestamp("created_at").defaultNow(),
});

//👇🏻 users table with its column types
export const usersTable = pgTable("users", {
    id: serial("id").primaryKey().notNull(),
    created_at: timestamp("created_at").defaultNow(),
    owner_id: text("owner_id").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    address: text("address").notNull(),
})

//👇🏻 users table with its column types
export const tweetShareTable = pgTable("tweet_share", {
    id: serial("id").primaryKey().notNull(),
    shared_at: timestamp("created_at").defaultNow(),
    owner_User_id: text("owner_User_id").notNull(),
    tweet_id: text("tweet_id").notNull(),
    shared_with_user_id: text("shared_with_user_id").notNull(),
    
    
})
