import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TheCard from "../formats/TheCard";
import DB_CHARACTERS from "@/data/chars";

function Chars() {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="max-w-3/4"
            >
                <CarouselContent className="-ml-1">
                    {DB_CHARACTERS.map((char) => {
                        return (
                            <CarouselItem
                                key={char.name}
                                className="pl-1 basis-11/24"
                            >
                                <div className="h-[75dvh] p-1">
                                    <TheCard
                                        id={char.id}
                                        name={char.name}
                                        description={char.title}
                                        img_url={
                                            `https://nullptr-bot.github.io/Homomorphism-Convergence/${char.img ?? "images/no.JPG"}`
                                        }
                                    />
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}

export default Chars;
