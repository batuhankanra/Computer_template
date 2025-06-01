import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET() {
    try{
        const data=await prisma.category.findMany({
            select:{
                name:true,
                parentId:true
            }
        })
        return NextResponse.json(data,{status:200})
        
    }catch (err){
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}