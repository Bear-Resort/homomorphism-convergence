import { Button } from "./components/ui/button";

function Return() {
    const backToResort = () => {
        window.location.href = 'https://bear-resort.github.io/';
    }

    return (
        <Button
            onClick={backToResort}
            className="absolute top-4 left-4 flex items-center gap-2 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
        >
            <img
                src="https://bear-resort.github.io/logos/default-bear.gif"
                alt="Bear Resort"
                className="w-6 h-6 object-contain"
            />
            Back to Bear Resort
            </Button>
    )
}

export default Return;