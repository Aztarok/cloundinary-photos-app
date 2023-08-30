"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchBar({ initialSearch }: { initialSearch: string }) {
    const [tag, setTag] = useState(initialSearch ?? "");
    const router = useRouter();

    useEffect(() => {
        setTag("");
    }, [initialSearch]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.replace(`/gallery?search=${encodeURIComponent(tag)}`);
                router.refresh();
            }}
        >
            <Label htmlFor="tag" className="text-right">
                Search for images by tag
            </Label>
            <div className="flex gap-3">
                <Input
                    onChange={(e) => setTag(e.target.value)}
                    id="tag"
                    value={tag}
                    className=""
                />

                <Button type="submit">Search</Button>
            </div>
        </form>
    );
}
