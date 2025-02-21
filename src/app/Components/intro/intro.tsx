import { JobPosition } from "@/app/Components/intro/jobPosition";
import { aboutMeDataList } from "@/data/data";
import Image from "next/image";

export function Intro() {
    //TODO: Fix bug hình ảnh
    const portfolioPic: string = ""; // VD: "/images/portfolio_01.png"
    const myName = aboutMeDataList.filter((value) => {
        return value.title == "name";
    });

    return (
        <>
            <div id="home">
                <div className="absolute w-full h-[80svh]">
                    {portfolioPic != "" ? (
                        <Image
                            src={portfolioPic}
                            alt="portfolioPic"
                            layout="fill"
                            placeholder="blur"
                            blurDataURL="/images/loading.jpg"
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="relative w-full h-full">
                    {/* Header of portfolial */}
                    <div className="w-full h-full flex items-center">
                        <div className="px-[5%] lg:px-[15%] mt-[1rem]">
                            <div>
                                <p className="text-[calc(1.375rem+10vw)] lg:text-[calc(1.375rem+5vw)] font-[600]">
                                    Hey There!
                                </p>
                                <p className="text-[calc(1.375rem+3vw)] lg:text-[calc(1.375rem+2vw)] my-[2rem] font-[500]">
                                    I'm{" "}
                                    <span className="custom-text-color">
                                        {myName[0].value}
                                    </span>
                                </p>
                                <JobPosition />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
