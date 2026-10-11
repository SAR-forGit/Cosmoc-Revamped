"use client";
import { Sun, Moon } from "lucide-react"
import React from "react";

const DarkModeLightModeButton = ({ dark, setDark }) => {
    const toggleTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.setAttribute(
            "data-theme",
            newDark ? "dark" : "light"
        );
    };
    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full hover:scale-110 transition-transform"
        >
            {dark ? <Moon className="PrimaryHoverEffect text-[var(--primary)]" size={20} /> : <Sun className="PrimaryHoverEffect text-[var(--primary)]" size={20} />}
        </button>
    );
};

export default DarkModeLightModeButton;
