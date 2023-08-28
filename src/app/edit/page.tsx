"use client";

import { CloudImage } from "@/components/CloudImage";
import { Button } from "@/components/ui/Button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
    searchParams: { publicId }
}: {
    searchParams: {
        publicId: string;
    };
}) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
    >();

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Edit {publicId}</h1>
                </div>

                <div className="flex gap-4">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setTransformation(undefined);
                        }}
                    >
                        Clear All
                    </Button>
                    <Button
                        onClick={() => {
                            setTransformation("generative-fill");
                        }}
                    >
                        Apply Generative Fill
                    </Button>
                    <Button
                        onClick={() => {
                            setTransformation("blur");
                        }}
                    >
                        Apply Blur
                    </Button>
                    <Button
                        onClick={() => {
                            setTransformation("grayscale");
                        }}
                    >
                        Apply Grayscale
                    </Button>
                    <Button
                        onClick={() => {
                            setTransformation("pixelate");
                        }}
                    >
                        Apply Pixelate
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicId}
                        width="300"
                        height="200"
                        alt="some image"
                    />

                    {transformation === "generative-fill" && (
                        <CldImage
                            src={publicId}
                            width="1200"
                            height="1400"
                            alt="some image"
                            fillBackground
                        />
                    )}
                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            width="1200"
                            height="1400"
                            blur="800"
                            alt="some image"
                        />
                    )}
                    {transformation === "grayscale" && (
                        <CldImage
                            src={publicId}
                            width="1200"
                            height="1400"
                            grayscale
                            alt="some image"
                        />
                    )}
                    {transformation === "pixelate" && (
                        <CldImage
                            src={publicId}
                            width="1200"
                            height="1400"
                            pixelate
                            alt="some image"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}