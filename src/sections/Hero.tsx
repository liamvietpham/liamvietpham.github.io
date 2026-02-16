"use client";

import { HERO } from "../utils/data";
import Image from "next/image";

function Hero() {
    const handleViewResume = () => {
        window.open(HERO.resume.url, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="hero" className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <h3 className="text-xl lg:text-2xl font-medium text-black">
                        {HERO.greeting}
                    </h3>
                    <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
                        {HERO.headline}
                    </h1>

                    <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
                        {HERO.description}
                    </p>

                    <div className="flex justify-normal lg:justify-start gap-4 md:gap-8 mt-6">
                        <button
                            onClick={handleViewResume}
                            className="flex-1 lg:flex-none action-btn btn-scale-anim cursor-pointer"
                        >
                            {HERO.resume.viewButtonLabel}
                        </button>
                    </div>
                </div>

                <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
                    <Image
                        src="/profile_pic.webp"
                        alt={HERO.images.profileAlt}
                        className="profile-pic"
                        width={370}
                        height={428}
                    />
                    <Image
                        src="/react-icon.webp"
                        alt={HERO.images.reactAlt}
                        className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
                        width={64}
                        height={64}
                    />
                    <Image
                        src="/nodejs-icon.webp"
                        alt={HERO.images.nodeAlt}
                        className="icon-img left:5 md:left-10 -bottom-2 rotate-[2.75deg]"
                        width={64}
                        height={64}
                    />
                    <Image
                        src="/html-icon.webp"
                        alt={HERO.images.htmlAlt}
                        className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
                        width={64}
                        height={64}
                    />
                    <Image
                        src="/js-icon.webp"
                        alt={HERO.images.jsAlt}
                        className="icon-img left-[210px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"
                        width={64}
                        height={64}
                    />
                </div>
            </div>

            {/* <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((stat) => (
                    <StatInfoCard
                        key={stat.id}
                        count={stat.value}
                        label={stat.label}
                    />
                ))}
            </div> */}
        </section>
    );
}

export default Hero;
