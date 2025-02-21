"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import các module cần thiết của Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";

interface cardType {
    name: string;
    describe: string;
    techList: string[];
    imageList: string[];
    gitLink: string;
    isComplete: boolean;
    isGoLive: boolean;
    goliveLink: string;
}

export function ProjectSlider({ data }: { data: cardType }) {
    return (
        <div className="w-full h-full flex justify-between items-between flex-col lg:flex-row">
            <div className="relative w-full lg:w-[40vw] lg:max-w-[35rem] h-[calc(25vh+20vw)] lg:h-[50vw] max-h-[37rem]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: "#custom-next-button",
                        prevEl: "#custom-prev-button",
                    }}
                    loop={true}
                    speed={300}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-full h-full"
                >
                    {data.imageList.map((image, index) => (
                        <SwiperSlide key={`Project_Image_No_${index}`}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={image || "/images/loading.jpg"}
                                    alt={`Project Image No.${index}`}
                                    fill
                                    sizes="100%"
                                    placeholder="blur"
                                    blurDataURL="/images/loading.jpg"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    id="custom-prev-button"
                    className="absolute top-[44%] left-[5%] w-[3rem] h-[3rem] lg:w-[3.5vw] lg:h-[3.5vw] border border-[var(--border-color-main)] rounded-[50%] bg-[var(--text-color-white)] z-[1] opacity-[0.7] hover:cursor-pointer rotate-[180deg]"
                >
                    <Image
                        src="/icons/arrow.png"
                        alt="portfolio_02.png"
                        fill
                        sizes="100%"
                        placeholder="blur"
                        blurDataURL="/images/loading.jpg"
                    />
                </div>
                <div
                    id="custom-next-button"
                    className="absolute top-[44%] right-[5%] w-[3rem] h-[3rem] lg:w-[3.5vw] lg:h-[3.5vw] border border-[var(--border-color-main)] rounded-[50%] bg-[var(--text-color-white)] z-[1] opacity-[0.5] hover:cursor-pointer"
                >
                    <Image
                        src="/icons/arrow.png"
                        alt="portfolio_02.png"
                        fill
                        sizes="100%"
                        placeholder="blur"
                        blurDataURL="/images/loading.jpg"
                    />
                </div>
            </div>

            {/* Project Detail */}
            <div className="w-full lg:w-[40vw] lg:max-w-[35rem] h-[calc(60vh-20vw)] lg:h-[50vw] max-h-[37rem] p-4 lg:p-6 border overflow-auto">
                {/* Project Name */}
                <div className="w-full flex justify-center text-center">
                    <p className="text-[calc(1rem+1vw)] font-bold">
                        {data.name.trim() ? data.name : "Unknow Name"}
                    </p>
                </div>

                {/* Project Status */}
                <div className="w-full flex items-center mt-[10px]">
                    <p>Status:</p>
                    <div
                        className={`py-[2px] px-[6px] ml-[2px] rounded-[5px] text-[var(--text-color-white)] font-bold ${
                            data.isComplete ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        <p>{data.isComplete ? "Complete" : "Incomplete"}</p>
                    </div>
                </div>

                {/* Project Tech Stack */}
                <div className="w-full flex items-center mt-[10px] max-h-[2rem]">
                    <p className="mr-[2px]">Tech Stack:</p>
                    {data.techList.map((tech, index) => (
                        <div
                            key={`${tech}_${index}`}
                            className="py-[2px] px-[4px] bg-[var(--text-color-gray)] ml-[2px] rounded-[5px] text-[var(--text-color-white)]"
                        >
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>

                {/* Project Git Link */}
                <div className="w-full flex items-center mt-[10px]">
                    <p className="mr-[5px]">Git Link:</p>
                    {data.gitLink ? (
                        <Link
                            href={`${data.gitLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="font-bold text-green-500">
                                Show Me
                            </span>
                        </Link>
                    ) : (
                        <p className="font-bold text-red-500 ml-[2px]">
                            Unavailable
                        </p>
                    )}
                </div>

                {/* Project Demo Link */}
                <div className="w-full flex items-center mt-[10px]">
                    <p className="mr-[5px]">Demo:</p>
                    {data.isGoLive && data.goliveLink ? (
                        <Link
                            href={`${data.goliveLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="font-bold text-green-500">
                                Show Me
                            </span>
                        </Link>
                    ) : (
                        <p className="font-bold text-red-500 ml-[2px]">
                            Unavailable
                        </p>
                    )}
                </div>

                {/* Project Describle */}
                <div className="w-full mt-[10px]">
                    <div>
                        <p>Describle:</p>
                    </div>
                    <div className="pl-2 italic">
                        <p>
                            {data.describe.trim()
                                ? data.describe
                                : "No description available"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
