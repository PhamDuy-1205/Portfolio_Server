"use client";
import Image from "next/image";
import { ProjectSlider } from "./projectSlider";
import { useEffect, useState } from "react";

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

export function ProjectCard({ data }: { data: cardType }) {
    const [projectDetailDisplay, setProjectDetailDisplay] = useState(false);
    const [projectDetailAnimation, setProjectDetailAnimation] = useState(false);
    useEffect(() => {
        if (projectDetailDisplay) {
            const timeout = setTimeout(() => {
                setProjectDetailAnimation(true);
            }, 300);

            // Cleanup function to clear the timeout if the component unmounts or if the dependency changes before the timeout fires
            return () => clearTimeout(timeout);
        } else {
            setProjectDetailAnimation(false);
        }
    }, [projectDetailDisplay]);
    const loadingPicture =
        "https://i.pinimg.com/236x/14/fc/d1/14fcd189633936157ee354b6a092169d.jpg";

    return (
        <div className="relative w-[23rem] lg:w-[30vw] h-[50vw] max-h-[20rem] mb-[1vw] border-[2px] border-[var(--border-color-main)] hover:border-[var(--text-color-white)] rounded-[20px] overflow-hidden group duration-[600ms] hover:shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] hover:shadow-[var(--text-color-gray)]">
            <Image
                src={data.imageList[0] || loadingPicture}
                alt="portfolio_02.png"
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL="/images/loading.jpg"
            />
            <div className="absolute w-full h-0 group-hover:h-full custom-bg-color opacity-[0.8] duration-[600ms]" />
            <div className="absolute w-full bottom-0 h-0 group-hover:h-full opacity-0 group-hover:opacity-[1] flex justify-center items-center flex-col overflow-hidden duration-[600ms] text-[var(--border-color-main)]">
                <div className="h-[40%] w-full flex justify-center items-center">
                    <p className="text-[calc(1.375rem+1vw)] line-clamp-2 text-center font-bold">
                        {data.name.trim() ? data.name : "Unknow Name"}
                    </p>
                </div>
                <div
                    className="w-fit px-[20px] py-[10px] border rounded-[10px] mt-[10px] bg-[var(--border-color-main)] hover:bg-[var(--background-color-second)] text-[var(--text-color-white)] hover:cursor-pointer"
                    onClick={() => setProjectDetailDisplay(true)}
                >
                    <p className="font-bold">See More</p>
                </div>
            </div>
            <div>
                {projectDetailDisplay ? (
                    <>
                        {/* Lớp phủ nền màu xám */}
                        <div
                            className="fixed inset-0 z-[4]"
                            onClick={() => setProjectDetailDisplay(false)}
                        />

                        {/* Nội dung div nằm giữa màn hình */}
                        <div
                            className={`flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-lg rounded-[20px] overflow-hidden z-20 border-[2px] border-[var(--text-color-gray)] duration-500 ${
                                projectDetailAnimation
                                    ? "w-[80vw] max-w-[70rem] h-[85vh] lg:h-[50vw] max-h-[37rem] opacity-[1]"
                                    : "w-0 h-0 opacity-[0]"
                            }`}
                        >
                            <ProjectSlider data={data} />
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
