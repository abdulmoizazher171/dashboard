import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";




import Grid from "./Grid";
import Chart from "./chart";
import Loadtable from "./TableContainer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* 1. Header Area */}
        <header className="flex h-12 items-center justify-between px-4 border-b">
          <h1 >Documents</h1>
          <Breadcrumb />
          <Button size="sm">Quick Create</Button>
        </header>

        {/* 2. Main Content Area */}
        <main className="p-4 space-y-4">
          <Grid></Grid>
          <Chart></Chart>
          <Loadtable></Loadtable>

          
          
          {children}
        </main>
      </SidebarInset>




    </SidebarProvider>
  )
}