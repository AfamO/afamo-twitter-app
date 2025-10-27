import { addUser, getSingleUser } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userID, name, email, address } = await req.json();

    try {
        await addUser({
            user_id: userID,
            name: name,
            email: email,
            address: address,
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
        const user = await getSingleUser(userID!);
        return NextResponse.json({message: "User retrieved successfully!", user}, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}