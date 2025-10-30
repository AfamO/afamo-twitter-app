import { addUser, getSingleUser } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { user_id, name, email, address } = await req.json();

    try {
        await addUser({
            user_id: user_id,
            name: name,
            email: email,
            address: address,
 })
        return NextResponse.json(
 { message: "New user Created!" },
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
    const user_id = req.nextUrl.searchParams.get("user_id");

    try {
        const user = await getSingleUser(user_id!);
        return NextResponse.json({message: "User retrieved successfully!", user}, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}