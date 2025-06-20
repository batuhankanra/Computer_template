import { getUserCurrent } from "@/lib/action";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};




export async function DELETE(req: Request, { params }: Params) {
    try{
        const session=await getUserCurrent()
        if(session?.role!='ADMIN'){
            return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
        }
        await prisma.category.delete({
            where:{
                id:params.id
            }
        })
       
        
        return NextResponse.json({msg:'basarili'})
        
    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}



export async function PUT(req:Request,{params}:Params) {
    try{
        const session=await getUserCurrent()
        if(session?.role!='ADMIN'){
            return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
        }
        const id =await params.id
        const {name,parentId}=await req.json()
        const updates={name,parentId}
        if(name){
            updates.name=name
        }
        if(parentId){
            updates.parentId=parentId
        }
        await prisma.category.update({
            where:{
                id:id
            },
            data:{
                name:updates?.name ?? undefined,
                parentId:updates?.parentId ?? undefined
            }
        })
        return NextResponse.json({msg:'basarili'})
        
    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}
export async function GET(req:Request,{params}:Params) {
     try{
        const session=await getUserCurrent()
        if(session?.role!='ADMIN'){
            return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
        }
        const data=await prisma.category.findUnique({
            where:{
                id:params.id
            }
        })
        return NextResponse.json(data,{status:200})
        
    }catch (err){
        return NextResponse.json({msg:'Internal Server Error '},{status:500})
    }
}