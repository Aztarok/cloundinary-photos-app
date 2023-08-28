import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/DropdownMenu";
import { AddToAlbum } from "./AddToAlbum";
import { Menu } from "./icons/Menu";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

export function ImageMenu({ image }: { image: SearchResult }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild>
                        <AddToAlbum
                            image={image}
                            onClose={() => {
                                setOpen(false);
                            }}
                        />
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            href={`/edit?publicId=${encodeURI(
                                image.public_id
                            )}`}
                        >
                            <Pencil className="mr-2 w-4 h-4 ml-3" />
                            Edit
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
