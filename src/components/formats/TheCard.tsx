import { Card, CardContent } from "@/components/ui/card";

type TheCardProps = {
    name: string;
    description: string;
    img_url: string;
    id: string;
};

function TheCard(props: TheCardProps) {
    const { name, description, img_url, id } = props;
    return (
        <Card className="relative h-full aspect-[3/4]">
            <CardContent
                className="flex h-full items-center bg-center bg-cover justify-center overflow-hidden p-6 rounded-xl"
                style={{
                    backgroundImage: `url(/homomorphism-convergence/src/${img_url})`,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to top, var(--color-background) 10%, transparent 40%)`,
                    }}
                />
                <div className="font-semibold absolute top-5 right-5">
                    <span
                        className="text-2xl font-black"
                        style={{
                            WebkitTextStroke: "0.75px var(--color-background)",
                        }}
                    >
                        {" "}
                        {id}{" "}
                    </span>
                </div>
                <div className="font-semibold absolute bottom-5 left-5">
                    <span className="text-3xl"> {name} </span>
                    <br />
                    <br />
                    <span className="text-xl"> {description} </span>
                </div>
            </CardContent>
        </Card>
    );
}

export default TheCard;
