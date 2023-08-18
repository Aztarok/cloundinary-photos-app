"use client";

import { Heart } from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { useTransition } from "react";
import { setAsFavorite } from "./Actions";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/FullHeart";

export function CloudImage(
    props: any & { imageData: SearchResult; path: string }
) {
    const { imageData } = props;

    const [transition, setTransition] = useTransition();

    const isFavorited = imageData.tags.includes("favorite");
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorited ? (
                <FullHeart
                    onClick={() => {
                        setTransition(() => {
                            setAsFavorite(
                                imageData.public_id,
                                false,
                                props.path
                            );
                        });
                    }}
                    className="absolute top-2 left-2 hover:cursor-pointer hover:text-white text-red-500"
                />
            ) : (
                <Heart
                    onClick={() => {
                        setTransition(() => {
                            setAsFavorite(
                                imageData.public_id,
                                true,
                                props.path
                            );
                        });
                    }}
                    className="absolute top-2 left-2 hover:cursor-pointer hover:text-red-500"
                />
            )}
        </div>
    );
}
