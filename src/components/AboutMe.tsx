import Image from "next/image";
import { ABOUT_ME } from "@/utils/data";

function AboutMe() {
    return (
        <section id="about" className="container mx-auto px-8 py-16">
            <h2 className="block lg:hidden w-50 section-title text-left mb-16">
                {ABOUT_ME.title}
            </h2>

            <div className="flex flex-col lg:flex-row gap-14 items-start justify-between">
                <div className="w-75 md:w-92.5 h-87.5 md:h-107 bg-orange-100/50 rounded-3xl mx-auto relative">
                    <Image
                        src="/profile_pic_600x700.webp"
                        alt="Profile picture"
                        className="profile-pic md:hidden"
                        width={300}
                        height={350}
                        priority
                    />
                    <Image
                        src="/profile_pic_740x856.webp"
                        alt="Profile picture"
                        className="hidden md:block profile-pic"
                        width={370}
                        height={428}
                        priority
                    />
                </div>

                <div className="flex-1">
                    <h2 className="hidden lg:block w-50 section-title text-left">
                        {ABOUT_ME.title}
                    </h2>

                    <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
                        {ABOUT_ME.content}
                    </p>

                    <div className="flex gap-4 mt-6">
                        {ABOUT_ME.socialLinks.map((item) => (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={item.label}
                                className="cursor-pointer group"
                                aria-label={item.label}
                                title={item.label}
                            >
                                <item.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-primary" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
