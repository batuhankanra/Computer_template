import { getUserCurrent } from "@/lib/action"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
    try{
                const session=await getUserCurrent()
                if(session?.role!='ADMIN'){
                    return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
                }
                const data =await prisma.user.findMany()
                return NextResponse.json(data,{status:200})
                
            }catch (err){
                console.log(err)
                return NextResponse.json({msg:'Internal Server Error '},{status:500})
            }
}