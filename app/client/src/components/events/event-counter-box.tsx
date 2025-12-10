export type EventCounterBoxProps = {
    icon: React.ElementType;
    title: string;
    count: number;
}

const EventCounterBox = ({ icon: Icon, title, count }: EventCounterBoxProps) => {
    return (
        <div className="bg-background flex items-center gap-5 rounded-xl p-3 px-5 w-full">
            <div className="bg-(--color-gradient-start-red) rounded-full p-3">
                <Icon className="text-white" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-sm text-muted-foreground font-medium">{title}</h1>
                <h2 className="text-2xl font-bold">{count}</h2>
            </div>
        </div>
    )
}

export default EventCounterBox;