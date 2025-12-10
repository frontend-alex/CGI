import * as React from "react"
import { Cell, Label, Pie, PieChart, Sector } from "recharts"
import type { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ticketData = [
    { label: "Fully Booked", value: 834, color: "var(--color-gradient-start-red)" },
    { label: "Available", value: 698, color: "#dc6c79" },
    { label: "Sold Out", value: 1251, color: "#010101" },
]

const chartConfig = {
    tickets: { label: "Tickets" },
    fullyBooked: {
        label: "Fully Booked",
        color: "var(--color-gradient-start-red)",
    },
    available: {
        label: "Available",
        color: "#e25666ff",
    },
    soldOut: {
        label: "Sold Out",
        color: "var(--foreground)",
    },
} satisfies ChartConfig

const TicketReservationChart = () => {
    const id = "pie-interactive"

    const [activeLabel, setActiveLabel] = React.useState(ticketData[0].label)

    const activeIndex = React.useMemo(
        () => ticketData.findIndex((item) => item.label === activeLabel),
        [activeLabel]
    )

    return (
        <Card data-chart={id} className="flex flex-col h-full shadow-none border-none">
            <ChartStyle id={id} config={chartConfig} />

            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="flex items-center gap-3">
                    <CardTitle className="text-xl font-semibold">Ticket Reservation</CardTitle>

                    <Select value={activeLabel} onValueChange={setActiveLabel}>
                        <SelectTrigger
                            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5 no-ring border-accent"
                            aria-label="Select ticket segment"
                        >
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>

                        <SelectContent align="end" className="rounded-xl">
                            {ticketData.map((item) => (
                                <SelectItem key={item.label} value={item.label} className="rounded-lg [&_span]:flex">
                                    <div className="flex items-center gap-2 text-xs">
                                        <span
                                            className="flex h-3 w-3 shrink-0 rounded-xs"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        {item.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[300px]"
                >
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

                        <Pie
                            data={ticketData}
                            dataKey="value"
                            nameKey="label"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >

                            {ticketData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                            <Label
                                content={({ viewBox }) => {
                                    const reservedTotal = ticketData
                                        .filter(
                                            (item) =>
                                                item.label === "Fully Booked" ||
                                                item.label === "Sold Out"
                                        )
                                        .reduce((sum, item) => sum + item.value, 0)

                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {reservedTotal.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Tickets
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 mt-4">
                {ticketData.map((item) => {
                    const total = ticketData.reduce((sum, i) => sum + i.value, 0)
                    const percentage = ((item.value / total) * 100).toFixed(0)

                    return (
                        <div
                            key={item.label}
                            className="flex w-full items-center justify-between rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="h-10 w-2 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <span className="text-lg font-bold">
                                        {item.value.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className="text-sm font-semibold bg-muted px-3 py-2 rounded-md">
                                {percentage}%
                            </div>
                        </div>
                    )
                })}
            </CardFooter>
        </Card>
    )
}

export default TicketReservationChart
