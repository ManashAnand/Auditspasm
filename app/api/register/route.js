import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);
const envKey = process.env.SECRET_KEY;

export async function POST(req) {
  const { name, email, password,  secretKey } =
    await req.json();
  await connectDB();
  if(envKey!=secretKey){
    return NextResponse.json(
        { message: "Secret key doesn't match" },
        { status: 500 }
      );
  }
    try {
        const user = await UserModel.create({
           name,
           email,
           password: bcrypt.hashSync(password, salt),
       
         });
         return NextResponse.json({ user }, { status: 200 });
         } catch (error) {
           console.log(error);
           return NextResponse.json(
             { message: "Error in registering user" },
             { status: 500 }
           );
         }
}