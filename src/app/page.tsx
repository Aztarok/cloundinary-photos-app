"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};

export default function Home() {
    const [imageId, setImageId] = useState("");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CldUploadButton
                //@ts-ignore
                onUpload={(result: UploadResult) => {
                    setImageId(result.info.public_id);
                }}
                uploadPreset="ehyd7v6w"
            />

            {imageId && (
                <CldImage
                    width="960"
                    height="600"
                    src={imageId}
                    sizes="100vw"
                    alt="desc"
                />
            )}
        </main>
    );
}
