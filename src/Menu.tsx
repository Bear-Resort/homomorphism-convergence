import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { $theme, toggleTheme } from "./lib/states";
import { useStore } from "@nanostores/react";
import { openPage } from "@nanostores/router";
import { $router } from "./lib/router";

function Menu() {
    const [loggedInUser, setLoggedInUser] = useState(
        localStorage.getItem("loggedInUser"),
    );

    useEffect(() => {
        function syncUser() {
            setLoggedInUser(localStorage.getItem("loggedInUser"));
        }
        window.addEventListener("storage", syncUser);
        return () => window.removeEventListener("storage", syncUser);
    }, []);

    const promptToUserCenter = () => {
        window.open(
            "https://bear-resort.github.io/assets/html/login.html",
            "_blank",
        );
    };

    const theme = useStore($theme);

    return (
        <div className="absolute top-4 right-4 border-solid">
            <DropdownMenu>
                <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        onClick={() => {
                            openPage($router, "home");
                        }}
                    >
                        Home
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Profile</DropdownMenuLabel>
                    <DropdownMenuItem onClick={promptToUserCenter}>
                        {" "}
                        {loggedInUser ? loggedInUser : "Log in"}{" "}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Training</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => {
                            openPage($router, "algebra");
                        }}
                    >
                        Homorphism
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            openPage($router, "analysis");
                        }}
                    >
                        Convergence
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => {
                            openPage($router, "characters");
                        }}
                    >
                        Characters
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Setting</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={(event) => {
                            event.preventDefault();
                            toggleTheme();
                        }}
                    >
                        Theme: {theme}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Menu;
