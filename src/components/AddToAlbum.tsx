import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { createAlbum } from "./Actions";

export function AddToAlbum({
    image,
    onClose
}: {
    image: SearchResult;
    onClose: () => void;
}) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpenState) => {
                setOpen(newOpenState);
                if (!newOpenState) {
                    onClose();
                }
            }}
        >
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-full">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Name of the album you want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            onChange={(e) => setAlbumName(e.target.value)}
                            id="album"
                            value={albumName}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            onClose();
                            setOpen(false);
                            await createAlbum(albumName, image);
                        }}
                        type="submit"
                    >
                        Add to Album
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
