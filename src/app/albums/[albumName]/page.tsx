import AlbumGrid from "@/app/albums/[albumName]/AlbumGrid";
import { ForceRefresh } from "@/components/ForceRefesh";
import cloudinary from "cloudinary";

export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function AblumNamePage({
    params: { albumName }
}: {
    params: { albumName: string };
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };
    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">{albumName} Album</h1>
                </div>

                <AlbumGrid images={results.resources} />
            </div>
        </section>
    );
}
