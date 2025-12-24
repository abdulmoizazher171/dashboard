import { Bar,BarChart, XAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
 
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chart = () => {
  return (
    <div>
       <ChartContainer config={chartConfig} className="h-72 w-full">

       {/* <ChartContainer.Header title="Website Traffic" description="Monthly visitors by device type." /> */}
      
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
         <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default chart
