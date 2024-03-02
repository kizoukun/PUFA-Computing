import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(request: Request) {
   try {
      const data = await request.formData();
      const file = data.get("image") as unknown as File;
      if (!file) {
         return NextResponse.json(
            { error: "Image is required" },
            { status: 400 }
         );
      }
      if (file.size > 10000000) {
         return NextResponse.json(
            { error: "Image must be less than 10MB" },
            { status: 400 }
         );
      }
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `public/uploads/${fileName}`;
      const fileUrl = `/uploads/${fileName}`;
      fs.mkdir("public/uploads", { recursive: true });
      await fs.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
      return NextResponse.json({ error: false, url: fileUrl }, { status: 200 });
   } catch (err) {
      console.log(err);
      return NextResponse.json(
         { error: "Failed to upload file" },
         { status: 500 }
      );
   }
}
