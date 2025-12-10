import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ticketYearlyData } from "@/constants/data"


const chartConfig = {
    views: {
        label: "Total Tickets",
    },
    tickets: {
        label: "Tickets Sold",
        color: "var(--color-gradient-start-red)",
    },
} satisfies ChartConfig

const TicketYearlyChart = () => {

    const total = React.useMemo(
        () => ({
            tickets: ticketYearlyData.reduce((acc, curr) => acc + curr.tickets, 0),
        }),
        []
    )

    return (
        <Card className="py-2 rounded-xl border-none shadow-none">
            <CardHeader className="flex flex-col items-stretch border-b mt-2 lg:-mt-2 !p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 sm:!py-0">
                    <CardTitle className="text-xl font-semibold">Ticket Sales – Yearly Trend</CardTitle>
                    <CardDescription>
                        Showing total tickets sold for the selected timeframe
                    </CardDescription>
                </div>
                <div className="flex">
                    <button
                        className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                    >
                        <span className="text-muted-foreground text-xs">
                            {chartConfig.tickets.label}
                        </span>
                        <span className="text-lg leading-none font-bold sm:text-3xl">
                            {total.tickets.toLocaleString()}
                        </span>
                    </button>
                </div>
            </CardHeader>

            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={ticketYearlyData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />

                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="Total Tickets"
                                    labelFormatter={(value) =>
                                        new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }
                                />
                            }
                        />

                        <Bar dataKey="tickets" fill={chartConfig.tickets.color} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default TicketYearlyChart
