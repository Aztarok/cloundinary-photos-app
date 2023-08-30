import { Button } from "@/components/ui/Button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/Card";
import Link from "next/link";
import { Folder } from "./page";

export function AlbumCard({ folder }: { folder: Folder }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription>
                    See all your {folder.name} images
                </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild>
                    <Link href={`/albums/${folder.name}`}>View Album</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
