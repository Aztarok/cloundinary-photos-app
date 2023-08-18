"use client";

import { Heart } from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { useTransition } from "react";
import { setAsFavorite } from "./Actions";
import { SearchResult } from "./page";

export function CloudImage(props: any & SearchResult) {
    const [transition, setTransition] = useTransition();

    const isFavorited = props.tags.includes("favorite");
    return (
        <div className="relative">
            <CldImage {...props} src={props.public_id} />
            <Heart
                onClick={() => {
                    setTransition(() => {
                        setAsFavorite(props.public_id);
                    });
                }}
                className="absolute top-2 left-2 hover:cursor-pointer hover:text-red-500"
            />
        </div>
    );
}
