"use client";
import Image from "next/image";
import Link from "next/link";
import { contactIconList, portfolioMenu } from "@/data/data";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
    const contactList = contactIconList.filter((item) => item.isReady);
    const [displayFillter, setDisplayFillter] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const handleClickToScroll = (id: string) => () => {
        if (id != "") {
            const element = document.getElementById(id);
            if (element) {
                const top =
                    element.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({
                    top: top,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        if (displayFillter) {
            document.addEventListener(
                "mousedown",
                handleClickOutsideWillCloseFillter
            );
        } else {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideWillCloseFillter
            );
        }
        // Cleanup function
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideWillCloseFillter
            );
        };
    }, [displayFillter]);

    // Kiểm tra nếu click bên ngoài phạm vi fillter sẽ đóng fillter lại
    function handleClickOutsideWillCloseFillter(event: MouseEvent) {
        if (
            filterRef.current &&
            !filterRef.current.contains(event.target as Node)
        ) {
            setDisplayFillter(false);
        }
    }

    return (
        <div className="flex justify-between w-[100vw] h-full bg-[var(--background-color-second)] py-[1rem] px-[5vw] sm:px-[20vw]">
            {/* List of contact icon */}
            <div className="flex">
                {contactList.map((contact) => (
                    <div className="w-[2rem] mr-[10px]" key={contact.id}>
                        <Link
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={contact.imageUrl}
                                alt={contact.name}
                                width={100}
                                height={100}
                                placeholder="blur"
                                blurDataURL="/images/loading.jpg"
                            />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Portfolio Menu PC */}
            <div className="hidden lg:flex">
                {portfolioMenu.map((menuItem) => (
                    <p
                        key={menuItem.hrefId}
                        onClick={handleClickToScroll(menuItem.hrefId)}
                        className="mr-[1rem] text-[1.2rem] font-bold opacity-[0.5] hover:opacity-[1] hover:cursor-pointer"
                    >
                        {menuItem.text}
                    </p>
                ))}
            </div>

            {/* Portfolio Menu Mobile */}
            <div className="flex lg:hidden">
                <div className="relative">
                    <div
                        className="border border-[var(--border-color-main)] p-[10px] rounded-[10px] hover:bg-[var(--border-color-main)] hover:border-[var(--background-color-main)] hover:cursor-pointer"
                        onClick={() => {
                            setDisplayFillter(!displayFillter);
                        }}
                    >
                        {/* Menu Icon */}
                        <Image
                            src={"/icons/black_menu.png"}
                            alt={"black menu icon"}
                            width={20}
                            height={20}
                        />
                    </div>
                    {/* Menu Dropdown */}
                    <div
                        className={`absolute w-[7rem] z-50 bg-[var(--background-color-second)] border rounded-[10px] p-[10px] left-[-7rem] top-[3rem] ${
                            displayFillter ? "" : "hidden"
                        }`}
                        ref={filterRef}
                    >
                        {portfolioMenu.map((menuItem) => (
                            <p
                                key={menuItem.hrefId}
                                onClick={handleClickToScroll(menuItem.hrefId)}
                                className="w-fit text-[1rem] font-bold opacity-[0.5] hover:opacity-[1] hover:cursor-pointer"
                            >
                                {menuItem.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
