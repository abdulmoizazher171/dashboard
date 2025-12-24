import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"




const Kard = () => {
  return (
    <div>
        <Card className="w-80 h-80">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a description of the card.</CardDescription>
        </CardHeader>
        <CardContent>
            <p>This is the main content of the card.</p>
            <Label htmlFor="input-example">Example Label</Label>
        </CardContent>
        <CardFooter>
            <CardAction >Learn More</CardAction>
        </CardFooter>   

        </Card>
    </div>
  )
}

export default Kard
