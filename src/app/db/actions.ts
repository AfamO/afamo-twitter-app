import { tweetsDB, usersDB } from ".";
import { tweetsTable, usersTable, tweetShareTable } from './schema';
import { desc, eq } from "drizzle-orm";

//👇🏻 add a new row to the tweettable
export const createTweet = async (tweet: Tweet) => {
    await tweetsDB.insert(tweetsTable).values({
    user_id: tweet.user_id,
    content: tweet.content,
    followers:JSON.stringify(tweet.followers),
 });
};

//👇🏻 get all user's invoices
export const getUserTweets = async (user_id: string) => {
    return await tweetsDB.select().from(tweetsTable).where(eq(tweetsTable.owner_id, user_id)).orderBy(desc(tweetsTable.created_at));
};

//👇🏻 get single invoice
export const getSingleTweet = async (id: number) => {
    return await tweetsDB.select().from(tweetsTable).where(eq(tweetsTable.id, id));
};

//👇🏻 get users list
export const getUsers = async (user_id: string) => {
    return await usersDB.select().from(usersTable).where(eq(usersTable.owner_id, user_id)).orderBy(desc(usersTable.created_at));
};

//👇🏻 get single customer
export const getSingleUser = async (name: string) => {
    return await usersDB.select().from(usersTable).where(eq(usersTable.name, name));
};

//👇🏻 add a new row to the customers table
export const addUser = async (user: User) => {
    await usersDB.insert(usersTable).values({
        owner_id: user.user_id,
        name: user.name,
        email: user.email,
        address: user.address,
 });
};

//👇🏻 delete a customer
export const deleteUser = async (id: number) => {
  await usersDB.delete(usersTable).where(eq(usersTable.id, id));
};