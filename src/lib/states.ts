import { atom } from "nanostores";
import Cookies from "js-cookie";

const initialTheme = Cookies.get("theme") || "day";

export const $theme = atom(initialTheme);

$theme.subscribe((value) => {
    Cookies.set("theme", value, {
        expires: 365,
        path: "/",
    });

    // Apply theme to DOM
    if (value === "night") {
        document.documentElement.classList.add("night");
    } else {
        document.documentElement.classList.remove("night");
    }
});

// Helper functions
export const toggleTheme = () => {
    const current = $theme.get();
    $theme.set(current === "night" ? "day" : "night");
};

export const setTheme = (theme: string) => {
    $theme.set(theme);
};

export const isDark = () => {
    return $theme.get() === "night";
};
