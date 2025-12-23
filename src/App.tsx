import { useStore } from "@nanostores/react";
import Menu from "./Menu";
import Return from "./Return";
import { $router } from "./lib/router";
import { Button } from "./components/ui/button";
import { openPage } from "@nanostores/router";
import Algebra from "./components/pages/Algebra";
import Analysis from "./components/pages/Analysis";
import Chars from "./components/pages/Chars";

function App() {
    const page = useStore($router);

    if (page) {
        if (page.route === "home") {
            return (
                <>
                    <div className="relative z-10">
                        <Return />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 border-solid">
                            Homormphism and Convergence
                        </div>
                        <Menu />
                    </div>
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-3xl">
                            Homormphism and Convergence
                        </h1>
                        <br />
                        <h2 className="text-xl">
                            You will submit to the beauty of mathematics!
                        </h2>
                    </div>
                </>
            );
        }
        if (
            page.route === "algebra" ||
            page.route === "analysis" ||
            page.route === "characters"
        ) {
            return (
                <>
                    <div className="relative z-10">
                        <Return />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 border-solid">
                            {page.route}
                        </div>
                        <Menu />
                    </div>
                    <div
                        key={page.route}
                        className="flex flex-col justify-center items-center min-h-screen fade-in"
                    >
                        {page.route === "algebra" && <Algebra />}
                        {page.route === "analysis" && <Analysis />}
                        {page.route === "characters" && <Chars />}
                    </div>
                </>
            );
        }
    }
    return (
        <>
            <Return />
            <Menu />
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-3xl">Homormphism and Convergence</h1>
                <br />
                <h2 className="text-xl">Page not found.</h2>
                <br />
                <Button
                    onClick={() => {
                        openPage($router, "home");
                    }}
                >
                    Return Home
                </Button>
            </div>
        </>
    );
}

export default App;
