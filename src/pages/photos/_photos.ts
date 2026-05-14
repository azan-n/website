import { getCollection } from "astro:content";

export const PHOTOS_TITLE = "Photos";
export const PHOTOS_DESCRIPTION = "A collection of pictures from my life";

const _photosCollection = await getCollection("photos");
const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/data/Images/**/*.{jpg,jpeg,png,webp,gif}",
    { eager: true },
);

export const photosCollection = _photosCollection.map((entry) => {
    const folderImages = Object.entries(images)
        .filter(([path]) => path.includes(`/${entry.id}/`))
        .map(([, module]) => module.default);

    return {
        folderImages,
        ...entry
    };
});
