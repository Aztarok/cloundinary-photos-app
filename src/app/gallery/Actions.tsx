"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavorite(publicId: string) {
    cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    revalidatePath("/gallery");
}
