"use client";

import { ImageGrid } from "@/components/ImageGrid";
import { CloudImage } from "@/components/CloudImage";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="An image of something"
                    />
                );
            }}
        />
    );
}
