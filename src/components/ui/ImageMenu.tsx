import { FolderPlus } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/DropdownMenu";
import { Menu } from "../icons/Menu";

export function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem>
                        <FolderPlus />
                        <span className="pl-4">Add to Album</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
