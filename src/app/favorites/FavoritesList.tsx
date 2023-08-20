"use client";

import { useEffect, useState } from "react";
import { CloudImage } from "../gallery/CloudImage";
import { SearchResult } from "../gallery/page";

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
        <div className="grid grid-cols-4 gap-4">
            {resources.map((result) => (
                <CloudImage
                    key={result.public_id}
                    imageData={result}
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
            ))}
        </div>
    );
}
