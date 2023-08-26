"use server";

import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";

export async function createAlbum(folder: string, image: SearchResult) {
    const folderResult = await cloudinary.v2.api.create_folder(folder);

    let parts = image.public_id.split("/");
    if (parts.length > 1) {
        parts = parts.slice(1);
    }

    const publicId = parts.join("/");

    cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicId}`);
}
