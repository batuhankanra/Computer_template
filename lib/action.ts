import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { prisma } from "./prisma"




export default async  function getSession() {
    return await getServerSession(authOptions)
}

export async function getUserCurrent() {
    try{
        const session =await getSession()
        if(!session?.user?.email){
            return null
        }
        const currentUser=await prisma.user.findUnique({
            where:{
                email:session.user.email
            },
            select:{
                id:true,
                email:true,
                role:true,
                name:true
            }
        })
        if(!currentUser) return null
        return currentUser

    }catch(err){
        return null
    }
}