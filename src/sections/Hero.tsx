import { HERO } from "../utils/data";
import Image from "next/image";

function Hero() {
    return (
        <section id="hero" className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-20">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <p className="text-xl lg:text-2xl font-medium text-black">
                        {HERO.greeting}
                    </p>
                    <h1 className="w-full lg:w-120 text-4xl lg:text-5xl font-bold leading-12.5 lg:leading-15 mt-3 bg-gradient-primary bg-clip-text text-transparent">
                        {HERO.headline}
                    </h1>

                    <p className="w-full lg:w-125 text-sm lg:text-base mt-4">
                        {HERO.description}
                    </p>

                    <div className="flex justify-normal lg:justify-start gap-4 md:gap-8 mt-6">
                        <a
                            href={HERO.resume.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center flex-1 lg:flex-none action-btn btn-scale-anim cursor-pointer"
                        >
                            {HERO.resume.viewButtonLabel}
                        </a>
                    </div>
                </div>

                <div className="w-75 md:w-92.5 h-87.5 md:h-107 bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet="/profile_pic_600x700.webp"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/profile_pic_740x856.webp"
                        />
                        <img
                            src="/profile_pic_740x856.webp"
                            alt={HERO.images.profileAlt}
                            className="profile-pic"
                            width={370}
                            height={428}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                    <Image
                        src="/react-icon.webp"
                        alt={HERO.images.reactAlt}
                        className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                    />
                    <Image
                        src="/nodejs-icon.webp"
                        alt={HERO.images.nodeAlt}
                        className="icon-img left:5 md:left-10 -bottom-2 rotate-[2.75deg]"
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                    />
                    <Image
                        src="/html-icon.webp"
                        alt={HERO.images.htmlAlt}
                        className="icon-img left-27.5 md:left-37.5 -bottom-6 rotate-[3.75deg]"
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                    />
                    <Image
                        src="/js-icon.webp"
                        alt={HERO.images.jsAlt}
                        className="icon-img left-52.5 md:left-63.75 -bottom-9 md:-bottom-10 rotate-[4.75deg]"
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
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
