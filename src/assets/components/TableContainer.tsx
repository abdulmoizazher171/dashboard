
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Task } from "./Columns";
import { columns, } from "./Columns";
import { DataTable } from "./DataTable";



export default  function LoadTable() {
  
 const tasks: Task[] = [
 
  {
    header: "API Documentation Audit",
    sectiontypes: "Development",
    status: "In Process",
    target: 15,
    limit: 20,
    reviewer: "jhon doe",
  },
  {
    header: "Social Media Campaign Q3",
    sectiontypes: "Marketing",
    status: "Done",
    target: 100,
    limit: 100,
    reviewer: "alex smith",
  },
  {
    header: "Warehouse Security Review",
    sectiontypes: "Logistics",
    status: "In Process",
    target: 85,
    limit: 150,
    reviewer: "jhon doe",
  },
  {
    header: "UX Research: Checkout Flow",
    sectiontypes: "Design",
    status: "Done",
    target: 12,
    limit: 12,
    reviewer: "alex smith",
  },
  {
    header: "Quarterly Tax Filing",
    sectiontypes: "Accounting",
    status: "In Process",
    target: 300,
    limit: 400,
    reviewer: "jhon doe",
  },
  {
    header: "New Hire Background Checks",
    sectiontypes: "HR",
    status: "Done",
    target: 25,
    limit: 25,
    reviewer: "alex smith",
  },
  {
    header: "Cloud Migration Phase 2",
    sectiontypes: "Infrastructure",
    status: "In Process",
    target: 60,
    limit: 100,
    reviewer: "jhon doe",
  },
  {
    header: "Customer Success Playbook",
    sectiontypes: "Support",
    status: "In Process",
    target: 40,
    limit: 55,
    reviewer: "alex smith",
  },
  {
    header: "Database Schema Optimization",
    sectiontypes: "Development",
    status: "Done",
    target: 10,
    limit: 10,
    reviewer: "jhon doe",
  },
  {
    header: "Competitor Price Analysis",
    sectiontypes: "Sales",
    status: "Done",
    target: 1500,
    limit: 1500,
    reviewer: "alex smith",
  }
];
  return (
    <div>

      
        <Tabs defaultValue="table" className="w-full">
            <TabsList>
              <TabsTrigger value="table">Outline</TabsTrigger>
              <TabsTrigger value="password">Past Performance</TabsTrigger>
              <TabsTrigger value="kasdjf">Key personnel</TabsTrigger>
              <TabsTrigger value="adsfasd">Focus documnet</TabsTrigger>
            </TabsList>
            <TabsContent value="table">
              <DataTable columns={columns} data={tasks} />
            </TabsContent>
            <TabsContent value="password">
              <div></div>
            </TabsContent>
          </Tabs>
      
    </div>
  )
}