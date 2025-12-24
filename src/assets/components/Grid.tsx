import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp,  TrendingDown } from "lucide-react"


const stats =
[
  {
    "id": 1,
    "title": "Total Revenue",
    "value": "$1,250.00",
    "change": "+12.5%",
    "trend": "up",
    "description": "Trending up this month",
    "footer": "Visitors for the last 6 months"
  },
  {
    "id": 2,
    "title": "New Customers",
    "value": "1,234",
    "change": "-20%",
    "trend": "down",
    "description": "Down 20% this period",
    "footer": "Acquisition needs attention"
  },
  {
    "id": 3,
    "title": "Active Accounts",
    "value": "45,678",
    "change": "+12.5%",
    "trend": "up",
    "description": "Strong user retention",
    "footer": "Engagement exceeds targets"
  },
  {
    "id": 4,
    "title": "Growth Rate",
    "value": "4.5%",
    "change": "+4.5%",
    "trend": "up",
    "description": "Steady performance increase",
    "footer": "Meets growth projections"
  }
]

const Grid = () => {
  return (
    
    
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item : any) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
               <div className="text-2xl font-bold">{item.value}</div>
            </CardTitle>
            <span className={ `text-sm font-medium  ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                 {item.change}
                {
                    item.trend === 'up' ? <TrendingUp className="inline-block ml-1 h-4 w-4" /> : <TrendingDown className="inline-block ml-1 h-4 w-4" />
            }
               
             
            </span>
            
          </CardHeader>
          <CardContent>
            
            <p className="text-xs text-muted-foreground mt-1">
              {item.description}
               <span className={ `text-sm font-medium  ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                 
                {
                    item.trend === 'up' ? <TrendingUp className="inline-block ml-1 h-4 w-4" /> : <TrendingDown className="inline-block ml-1 h-4 w-4" />
            }</span>
            </p>
            <p className="text-xs font-semibold mt-4 text-slate-400">
              {item.footer}
            </p>
          </CardContent>
        </Card>
      ))}
   </div>
  )
    
  
}

export default Grid
