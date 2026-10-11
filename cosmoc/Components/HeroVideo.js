"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeroVideo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const overlay = overlayRef.current;

            if (!overlay) return;

            gsap.set(overlay, {
                autoAlpha: 0,
                y: 40,
            });

            animationRef.current = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.6,
                    ease: "power3.out",
                },
            });

            animationRef.current.to(overlay, {
                autoAlpha: 1,
                y: 0,
            });

            return () => {
                animationRef.current?.kill();
                animationRef.current = null;
            };
        });

        return () => mm.revert();
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);

        if (window.matchMedia("(min-width: 1024px)").matches) {
            animationRef.current?.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);

        if (window.matchMedia("(min-width: 1024px)").matches) {
            animationRef.current?.reverse();
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative h-[650px] w-full overflow-hidden"
        >
            <video
                src="/Videos/CosmocHeroSectionVid.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col justify-center md:flex lg:flex-row lg:visible absolute inset-0 bg-gradient-to-t from-black via-black/40 via-90% to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/50 lg:via-60% lg:to-black"
            >
                <div className="h-[300px] lg:w-[50vw]"></div>

                <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                        <h1 className=" bg-gradient-to-r from-[aliceblue] from-0% to-[#5D455F] to-75% bg-clip-text text-transparent [-webkit-text-stroke:1px_black] text-[5rem] lg:text-[7rem]">
                            SPICE UP
                        </h1>
                        <p className="absolute bottom-0.5 text-[var(--primary)]">Your Looks</p>
                    </div>
                    <button className="bg-[var(--foreground)] text-[var(--primary)] hover:cursor-pointer mt-4 rounded-lg px-6 py-3">
                        Check Out
                    </button>
                </div>
            </div>
        </section>
    );

};

export default HeroVideo;
