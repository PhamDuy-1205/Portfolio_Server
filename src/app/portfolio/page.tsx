"use client";
import { Navbar } from "@/app/Components/navbar/navbar";
import { Intro } from "@/app/Components/intro/intro";
import { AboutMe } from "@/app/Components/aboutMe/aboutMe";
import { Skill } from "@/app/Components/skill/skill";
import { MyProject } from "@/app/Components/project/project";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [visibleSections, setVisibleSections] = useState<string[]>([]);
    const sections = [
        { id: "intro", component: <Intro />, offset: 100 },
        { id: "about-me", component: <AboutMe />, offset: 500 },
        { id: "skill", component: <Skill />, offset: 400 },
        { id: "my-project", component: <MyProject />, offset: 400 },
    ];

    const checkVisibleSections = () => {
        sections.forEach(({ id, offset }) => {
            const element = document.getElementById(id);
            if (element) {
                const top = element.getBoundingClientRect().top;
                if (
                    (top >= 0 && top <= window.innerHeight - offset) ||
                    (top <= 0 && -top <= element.offsetHeight)
                ) {
                    if (!visibleSections.includes(id)) {
                        setVisibleSections((prev) => [...prev, id]);
                    }
                }
            }
        });
    };

    useEffect(() => {
        checkVisibleSections();
        window.addEventListener("scroll", checkVisibleSections);
        return () => window.removeEventListener("scroll", checkVisibleSections);
    }, [visibleSections]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
        },
    };

    return (
        <div className="w-[100vw] h-full overflow-y-hidden select-none">
            <div className="fixed z-[3]">
                <Navbar />
            </div>
            {sections.map(({ id, component }) => (
                <div
                    key={id}
                    id={id}
                    className={`my-[12vw] lg:my-[4vw] mb-[12vw] lg:mb-[4vw]`}
                >
                    <motion.div
                        initial="hidden"
                        animate={
                            visibleSections.includes(id) ? "visible" : "hidden"
                        }
                        variants={sectionVariants}
                    >
                        {component}
                    </motion.div>
                </div>
            ))}
            <div className="my-[10rem]">
                {/* Div này dùng để thêm khoảng trống trong quá trình phát triển */}
            </div>
        </div>
    );
}
