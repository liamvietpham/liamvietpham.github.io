"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { MY_PROJECTS } from "../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import ProjectCard from "@/components/ProjectCard";

function MyProjects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start"
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const updateCarouselState = useCallback(() => {
        if (!emblaApi) return;

        const hasScrollableContent =
            emblaApi.scrollSnapList().length > 1 &&
            (emblaApi.canScrollPrev() || emblaApi.canScrollNext());

        setIsScrollable(hasScrollableContent);
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", updateCarouselState);
        emblaApi.on("reInit", updateCarouselState);
        emblaApi.on("resize", updateCarouselState);
        updateCarouselState();

        return () => {
            emblaApi.off("select", updateCarouselState);
            emblaApi.off("reInit", updateCarouselState);
            emblaApi.off("resize", updateCarouselState);
        };
    }, [emblaApi, updateCarouselState]);

    return (
        <section id="projects" className="bg-background mt-14">
            <div className="container mx-auto px-8 md:px-10 py-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h2 className="section-title">{MY_PROJECTS.title}</h2>

                    <p className="text-sm text-center mt-4 leading-6">
                        {MY_PROJECTS.description}
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex pt-14 pb-8">
                            {MY_PROJECTS.items.map((project) => (
                                <div
                                    key={project.id}
                                    className="min-w-[86%] sm:min-w-[46%] lg:min-w-[30%]"
                                >
                                    <ProjectCard
                                        imgUrl={project.image}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        liveUrl={project.liveUrl}
                                        githubUrl={project.githubUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {isScrollable && (
                        <>
                            <button
                                className={`arrow-btn -left-5 cursor-pointer ${
                                    !canScrollPrev ? "opacity-50" : ""
                                }`}
                                onClick={() => emblaApi?.scrollPrev()}
                                aria-label={`Scroll Previous ${MY_PROJECTS.items.length}`}
                                disabled={!canScrollPrev}
                            >
                                <IoIosArrowForward className="rotate-180" />
                            </button>

                            <button
                                className={`arrow-btn -right-5 cursor-pointer ${
                                    !canScrollNext ? "opacity-50" : ""
                                }`}
                                onClick={() => emblaApi?.scrollNext()}
                                aria-label={`Scroll Next ${MY_PROJECTS.items.length}`}
                                disabled={!canScrollNext}
                            >
                                <IoIosArrowForward />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MyProjects;
