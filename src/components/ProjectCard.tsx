import Image from "next/image";

type ProjectCardProps = {
    imgUrl: string;
    title: string;
    tags: string[];
};

function ProjectCard({ imgUrl, title, tags }: ProjectCardProps) {
    return (
        <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
            <Image
                src={imgUrl}
                alt={title}
                className="w-full h-72 md:h-80 object-cover"
                width={288}
                height={288}
            />

            <div className="px-4 py-5">
                <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs text-[#6B3526] bg-orange-100 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
