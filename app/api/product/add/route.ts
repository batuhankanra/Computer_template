import { NextRequest,NextResponse } from "next/server";
import { writeFile } from "fs";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";

export async function POST(req:NextRequest) {
    try{
        const data=await req.formData()
        const file:File[]=data.getAll("images") as File[]
        const name:string=data.get('name') as string
        const description:string=data.get('description') as string
        const price:string =data.get('price') as string

    }catch (err){
        return NextResponse.json({msg:'Internal Server Error '},{status:500})

    }
}