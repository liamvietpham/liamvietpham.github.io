import Image from "next/image";

type ProjectCardProps = {
    imgUrl: string;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
};

function ProjectCard({
    imgUrl,
    title,
    description,
    tags,
    liveUrl,
    githubUrl
}: ProjectCardProps) {
    return (
        <div className="h-full max-w-85 bg-white rounded-xl overflow-hidden shadow-md mx-2 flex flex-col">
            <div className="relative">
                <Image
                    src={imgUrl}
                    alt={title}
                    className="w-full h-56 md:h-64 object-cover"
                    width={288}
                    height={288}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute left-3 right-3 bottom-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] text-white bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-4 py-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis min-h-12">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-[#6B3526]/85 line-clamp-3 min-h-12">
                    {description}
                </p>

                {(liveUrl || githubUrl) && (
                    <div className="mt-4 flex items-center gap-4">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-[#6B3526] underline underline-offset-4 w-fit"
                                aria-label={`Open ${title} live website`}
                            >
                                Live
                            </a>
                        )}

                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-[#6B3526] underline underline-offset-4 w-fit"
                                aria-label={`Open ${title} GitHub repository`}
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
