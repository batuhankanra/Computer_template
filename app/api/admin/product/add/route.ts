"use server"
import { NextRequest,NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { getUserCurrent } from "@/lib/action";

export async function POST(req:NextRequest) {
    try{
        const session=await getUserCurrent()
        if(session?.role!='ADMIN'){
            return NextResponse.json({msg:'Yetkiniz Yetersiz'},{status:403})
        }
        const data=await req.formData()
        const files:File[]=data.getAll("images") as File[]
        const title:string=data.get('title') as string
        const description:string=data.get('description') as string
        const price:string =data.get('price') as string
        const parentId:string =data.get('parentId') as string
     
        if(!title || !description || !price || files.length===0 || !parentId){
            return NextResponse.json({msg:'Bütün alanlar dolu olmalıdır '},{status:400})
        }
        const imagePath:string[]=[]
        for(const file of files){
            const bytes=await file.arrayBuffer()
            const buffer=Buffer.from(bytes)
            const fileName=`${Date.now()}-${file.name.replace(/\s/g,"-")}`
            const filePath=join(process.cwd(),"public","uploads",fileName)
            await writeFile(filePath, buffer);
            const publicPath=`/uploads/${fileName}`
            imagePath.push(publicPath)
        }
        await prisma.product.create({
            data:{
                title,
                description,
                price: Number(price),
                img:imagePath,
                userId:session.id,
                categegoryId:parentId
            }
        })
        return NextResponse.json({msg:'Basarılı bir şekilde kaydedildi Ürününüz'})

    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'Internal Server Error '},{status:500})

    }
}