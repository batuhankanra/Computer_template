"use server"
import { NextResponse } from "next/server"
import {prisma} from '@/lib/prisma'
import bcrypt from 'bcrypt'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export async function POST(req:Request) {
  try{
    const {email,password,name}=await req.json()
    if(!email || !password || !name){
      return NextResponse.json({msg:'boş olmamalı'},{status:400})
    }
    if(!emailRegex.test(email)){
      return NextResponse.json({msg:'email formatı uygun değil'},{status:400})
    }
     if(!passwordRegex.test(password)){
      return NextResponse.json({msg:'Şifre formatı uygun değil'},{status:400})
    }
    const exists=await prisma.user.findUnique({
            where:{
                email
            }
        })
       
      if(exists){
        return NextResponse.json({msg:'boyle bir email var'},{status:400})
      }
    const hashedPassword=bcrypt.hashSync(password,10)
    const user=await prisma.user.create({
      data:{
        name,
        email,
        hashedPassword
      }
    })
    return NextResponse.json({msg:'Üyelik olusturuldu',user},{status:201})
    

  }

  catch (err){
        console.log(err)
        return NextResponse.json({msg:'server is broken' },{status:500})
  }
}