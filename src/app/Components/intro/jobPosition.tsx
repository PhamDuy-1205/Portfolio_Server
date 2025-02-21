"use client";

import { JobPositionList } from "@/data/data";
import { Typewriter } from "react-simple-typewriter";

export function JobPosition() {
    return (
        <div className="w-fit">
            <p className="text-[calc(1.375rem+1.5vw)] font-medium">
                I am a{" "}
                <Typewriter
                    words={JobPositionList} // List of words to type
                    loop={true} // Set to true if you want the typewriter to loop indefinitely
                    typeSpeed={100} // Speed of typing each character
                    deleteSpeed={50} // Speed of deleting each character
                    delaySpeed={2000} // Delay before starting to delete
                    cursor
                    cursorStyle="|" // Style of the cursor
                />
            </p>
        </div>
    );
}
