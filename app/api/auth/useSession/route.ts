"use server"

import { getUserCurrent } from "@/lib/action"
import { NextResponse } from "next/server"


export async function POST(req:Request){
    try{
        const session=await getUserCurrent()
        return NextResponse.json({msg:session})

    }catch (err){
        return NextResponse.json({msg:'Giriş Yapın'},{status:500})
    }
}