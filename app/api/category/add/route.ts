import { getUserCurrent } from "@/lib/action";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
    try{
        const session=await getUserCurrent()
        if(session?.role!='ADMIN'){
            return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
        }
        const {name,parentId}=await req.json()
        console.log(name)
        if(!name || !parentId ){
            return NextResponse.json({msg:'Kategori ismi Boş olamaz'},{status:400})
        }
        await prisma.category.create({
            data:{
                name,
                parentId,
                userId:session.id
            }
        })
        return NextResponse.json({msg:'basarili'})
        
    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}