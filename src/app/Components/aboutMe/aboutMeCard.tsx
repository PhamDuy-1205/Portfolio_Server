import { capitalizeEachFirstLetter } from "@/lib/validation";

type AboutMeCardProps = {
    title: string;
    content: string;
};

export default function AboutMeCard({ title, content }: AboutMeCardProps) {
    return (
        <>
            {title != "introduce myself content" ? (
                <div>
                    <div className="group relative h-[87px] w-full lg:max-w-[18rem] rounded-[10px] overflow-hidden bg-[#040620]">
                        <div className="absolute flex justify-center items-start flex-col w-full h-full pl-[10%] z-[2] transition-all duration-[500ms] group-hover:text-black">
                            <p className="truncate w-full custom-text-color font-[500] text-[18px] group-hover:text-white">
                                {capitalizeEachFirstLetter(title)}:
                            </p>
                            <p className="truncate w-full font-[400] text-[16px] group-hover:text-black group-hover:font-[500]">
                                {content}
                            </p>
                        </div>
                        <div className="h-[87px] w-[3px] custom-bg-color transition-all duration-[500ms] group-hover:w-full" />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
