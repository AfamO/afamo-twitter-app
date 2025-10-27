import { createTweet, getUserTweets } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { contents, followers, userID } = await req.json();

    try {
        await createTweet({
            user_id: userID,
            content:contents,
            followers:followers,
 })
        return NextResponse.json(
 { message: "New Tweet Created!" },
 { status: 201 }
 );
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}

export async function GET(req: NextRequest) {
    const userID = req.nextUrl.searchParams.get("userID");

    try {
        const tweets = await getUserTweets(userID!);
        return NextResponse.json({message: "Tweets retrieved successfully!", tweets}, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}