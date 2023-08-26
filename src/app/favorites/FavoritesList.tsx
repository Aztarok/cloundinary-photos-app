"use client";

import { useEffect, useState } from "react";
import { CloudImage } from "../../components/CloudImage";
import { SearchResult } from "../gallery/page";
import { ImageGrid } from "@/components/ImageGrid";

export default function FavoritesList({
    initialResources
}: {
    initialResources: SearchResult[];
}) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="An image of something"
                        onUnFavorite={(unfavoritedResource) => {
                            setResources((currentResources) =>
                                currentResources.filter((resource) => {
                                    return (
                                        resource.public_id !==
                                        unfavoritedResource.public_id
                                    );
                                })
                            );
                        }}
                    />
                );
            }}
        />
    );
}
