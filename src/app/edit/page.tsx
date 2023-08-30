"use client";

import { CloudImage } from "@/components/CloudImage";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
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
    const [prePrompt, setPrePrompt] = useState("");
    const [prompt, setPrompt] = useState("");
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
                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={() => {
                                setTransformation("generative-fill");
                                setPrompt(prePrompt);
                            }}
                        >
                            Apply Generative Fill
                        </Button>
                        <Label>Prompt:</Label>
                        <Input
                            value={prePrompt}
                            onChange={(e) =>
                                setPrePrompt(e.currentTarget.value)
                            }
                        />
                    </div>
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
                            width="1800"
                            height="1200"
                            alt="some image"
                            fillBackground={{
                                prompt
                            }}
                        />
                    )}
                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            width="1800"
                            height="1200"
                            // @ts-ignore
                            blur="800"
                            alt="some image"
                        />
                    )}
                    {transformation === "grayscale" && (
                        <CldImage
                            src={publicId}
                            width="1800"
                            height="1200"
                            // @ts-ignore
                            grayscale
                            alt="some image"
                        />
                    )}
                    {transformation === "pixelate" && (
                        <CldImage
                            src={publicId}
                            width="1800"
                            height="1200"
                            // @ts-ignore
                            pixelate
                            alt="some image"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
