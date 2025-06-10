import { getUserCurrent } from "@/lib/action";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getUserCurrent();

    if (session?.role !== "ADMIN") {
      return NextResponse.json({ msg: "Yetkiniz yetersiz" }, { status: 403 });
    }

    const { id } = await params;
    const data = await req.formData();

    const files = data.getAll("images") as File[];
    const title = data.get("title") as string | null;
    const description = data.get("description") as string | null;
    const price = data.get("price") as string | null;

    const updates: any = {};

    // ✅ Görsel güncellemesi
    const hasNewImages = files.length > 0 && files.some(f => f.size > 0);

    if (hasNewImages) {
      const product = await prisma.product.findUnique({
        where: { id },
      });

      if (!product) {
        return NextResponse.json({ msg: "Ürün bulunamadı" }, { status: 404 });
      }

      // Eski görselleri sil
      for (const imagePath of product.img) {
        const filePath = path.join(process.cwd(), "public", imagePath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      // Yeni görselleri yükle
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const newImageUrls: string[] = [];

      for (const file of files) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);
        newImageUrls.push(`/uploads/${fileName}`);
      }

      updates.img = newImageUrls;
    }

    if (title) updates.title = title;
    if (description) updates.description = description;
    if (price && !isNaN(Number(price))) updates.price = Number(price);

    // ✅ Eğer güncelleme yapılacak bir alan varsa
    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ msg: "Güncellenecek veri yok" }, { status: 400 });
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json({ msg: "Başarılı", data: updatedProduct }, { status: 200 });

  } catch (err) {
    console.error("HATA:", err);
    return NextResponse.json({ msg: "Sunucu hatası" }, { status: 500 });
  }
}

export async function DELETE( req: NextRequest,
  { params }: { params: { id: string } }) {
    try{
        const session = await getUserCurrent();
        if (session?.role !== "ADMIN") {
        return NextResponse.json({ msg: "Yetkiniz yetersiz" }, { status: 403 });
        }
        const id= await params.id
        const product =await prisma.product.findUnique({
            where:{id}
        })
        if (!product) {
        return NextResponse.json({ msg: "Ürün bulunamadı" }, { status: 404 });
      }

        // Eski görselleri sil
        for (const imagePath of product.img) {
            const filePath = path.join(process.cwd(), "public", imagePath);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        await prisma.product.delete({
          where:{id}
        })
        return NextResponse.json({msg:'Silme Başarılı'})
    }
    catch (err){
        return NextResponse.json({ msg: "Sunucu hatası" }, { status: 500 });

    }
}
