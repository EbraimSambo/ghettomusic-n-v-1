import { NextResponse } from "next/server";


export async function GET(){
    let data = await fetch('http://localhost:8000/api/allsongs/1')
    console.log(data);
    return NextResponse.json({data},{status: 200})
}