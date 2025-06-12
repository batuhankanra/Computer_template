import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
    try{
        const data=await prisma.category.findMany({
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true
                    }
                    
                }
            }
        })
        return NextResponse.json(data,{status:200})
        
    }catch (err){
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}