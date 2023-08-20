"use client";

import { Heart } from "@/components/icons/Heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { setAsFavorite } from "./Actions";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/FullHeart";

export function CloudImage(
    props: {
        imageData: SearchResult;
        onUnFavorite?: (unfavoritedResource: SearchResult) => void;
    } & Omit<CldImageProps, "src">
) {
    const { imageData, onUnFavorite } = props;

    const [transition, setTransition] = useTransition();

    const [isFavorited, setIsFavorited] = useState(
        imageData.tags.includes("favorite")
    );
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorited ? (
                <FullHeart
                    onClick={() => {
                        onUnFavorite?.(imageData);
                        setIsFavorited(false);
                        setTransition(() => {
                            setAsFavorite(imageData.public_id, false);
                        });
                    }}
                    className="absolute top-2 left-2 hover:cursor-pointer hover:text-white text-red-500"
                />
            ) : (
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        setTransition(() => {
                            setAsFavorite(imageData.public_id, true);
                        });
                    }}
                    className="absolute top-2 left-2 hover:cursor-pointer hover:text-red-500"
                />
            )}
        </div>
    );
}
