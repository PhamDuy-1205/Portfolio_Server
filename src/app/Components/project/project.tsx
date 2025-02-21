import { ProjectCard } from "@/app/Components/project/projectCard";
import { projectList } from "@/data/data";

export function MyProject() {
    return (
        <div id="projects">
            <div className="w-full flex justify-center items-center mb-[2vw]">
                <p className="text-[calc(1.375rem+4vw)] lg:text-[calc(1.375rem+1vw)] font-bold">
                    Project
                </p>
            </div>
            <div className="w-full px-[2vw] flex justify-center items-center flex-col md:grid gap-[1rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map((project, index) => (
                    <div key={`Project No.${index + 1}`}>
                        <ProjectCard data={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
