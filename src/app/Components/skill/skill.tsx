import { SkillCard } from "@/app/Components/skill/skillCard";
import { skillList } from "@/data/data";

export function Skill() {
    return (
        <div id="skill" className="">
            {/* Title */}
            <div className="flex justify-center items-center mb-[2vw]">
                <p className="text-[calc(1.375rem+4vw)] lg:text-[calc(1.375rem+1vw)] font-bold">
                    Skills
                </p>
            </div>
            <div className="grid gap-[1rem] grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 xxl:grid-cols-8 xxxl:grid-cols-9 justify-between items-start px-[5vw]">
                {skillList.map((skill, index) =>
                    skill.skillStatus ? (
                        <div key={`${skill.title}[${index}]`}>
                            <SkillCard
                                icons={skill.icons}
                                title={skill.title}
                                status={skill.skillStatus}
                            />
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
