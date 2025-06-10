import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserCurrent } from "@/lib/action";



export async function GET() {
     try{
            const session=await getUserCurrent()
            if(session?.role!='ADMIN'){
                return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
            }
            const data =await prisma.product.findMany({
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
            console.log(err)
            return NextResponse.json({msg:'Internal Server Error '},{status:500})
        }
}