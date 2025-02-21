import AboutMeCard from "./aboutMeCard";
import { aboutMeDataList } from "@/data/data";
import Image from "next/image";

export function AboutMe() {
    const image = "/images/portfolio_02.png";
    const introduceContent = aboutMeDataList.find(
        (item) => item.title === "introduce myself content"
    );

    return (
        <div id="aboutme" className="">
            {/* Title */}
            <div className="flex justify-center items-center mb-[2vw]">
                <p className="text-[calc(1.375rem+4vw)] lg:text-[calc(1.375rem+1vw)] font-bold">
                    About Me
                </p>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center px-[5vw]">
                {/* profile picture */}
                <div className="w-[85vw] lg:w-[43vw] h-[50vw] lg:h-[30vw] rounded-[20px] border-[7px] overflow-hidden">
                    <div className="relative h-full">
                        <Image
                            src={image}
                            alt={`${image}`}
                            fill
                            sizes="100%"
                            priority={false}
                            placeholder="blur"
                            blurDataURL="/images/loading.jpg"
                        />
                    </div>
                </div>
                {/* profile info */}
                <div className="w-[85vw] lg:w-[43vw]">
                    <div className="my-[5vw] lg:my-0 lg:mb-[1vw]">
                        <p className="text-[5vw] lg:text-[calc(0.6rem+1vw)]">
                            {introduceContent?.value}
                        </p>
                    </div>
                    <div>
                        <div className="grid gap-[1rem] grid-cols-1 sm:grid-cols-2 px-[1rem] lg:px-0">
                            {aboutMeDataList.map((data, index) => (
                                <AboutMeCard
                                    key={`${data.title}_${index}`}
                                    title={data.title}
                                    content={data.value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
