"use server"

import {writeFile} from "fs/promises"
import { join } from "path"

export async function UploadFile(prevState:UploadState,formData:FormData):Promise<UploadState> {
    const file=formData.get('file') as File
    if(!file || file.size===0){
        return {message:'Lütfen bir dosya yükleyin',success:false,filePath:''}
    }
    if(!file.type.startsWith("image/")){
        return { message: "Sadece resim dosyaları yüklenebilir.", success: false, filePath: "" };
    }
    const bytes=await file.arrayBuffer()
    const buffer=Buffer.from(bytes)
    try{
        const fileName=`${Date.now()}-${file.name.replace(/\s/g,"-")}`;
        const filePath=join(process.cwd(),"public","upload",fileName)
        await writeFile(filePath,buffer)
         console.log(`Dosya şuraya kaydedildi: ${filePath}`);
        const publicPath = `/uploads/${fileName}`;
        return {
            message:'Dosya Başarılı bir şekilde yüklendi',
            success:true,
            filePath:publicPath
        }



    }catch (err){
        console.log(err)
        return {
            message:'Dosya sunucuya kaydedilmedi',
            success:false,
            filePath:''
        }
    }

    
}