import { BarChart2, BarChart3, CreditCard, Database, Droplet, FileType, Folder, Forward, HelpCircle, Home, Inbox, LogOut, MessageSquareDot, Search, Trash2, User, User2, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { MoreHorizontal } from "lucide-react"


// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Lifecycle",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Analytics",
        url: "#",
        icon: BarChart3
    },
    {
        title: "Projects",
        url: "#",
        icon: Folder,
    },
    {
        title: "team",
        url: "#",
        icon: Users,
    },
]

const Documents = [
    {
        title: "Data Library",
        url: "#",
        icon: Database,
    },
    {
        title: "Reports",
        url: "#",
        icon: BarChart2,
    },
    {
        title: "Word Assistant",
        url: "#",
        icon: FileType,
    },

]

const footer = [
    {
        title: "Settings",
        url: "#",
        icon: User2,
    },
    {
        title: "Help",
        url: "#",
        icon: HelpCircle,

    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    }
]



export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Droplet />
                                <span>Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Home</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Documents</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {Documents.map((docment) => (
                                <SidebarMenuItem key={docment.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={docment.url}>
                                            <docment.icon />
                                            <span>{docment.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuAction>
                                                <MoreHorizontal />
                                            </SidebarMenuAction>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="right" align="start">
                                            <DropdownMenuItem>
                                                <span>Open</span>
                                                <Folder />

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Share</span>
                                                <Forward />
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Delete</span>
                                                <Trash2 />
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>

                    </SidebarGroupContent>



                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenu>
                            {footer.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>

                                    <SidebarMenuButton className="flex w-full items-center gap-2">
                                        {/* User Icon */}
                                        <Avatar className="shrink-0"><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback>  </Avatar>

                                        {/* Text Wrapper - Use flex-1 to take up available space */}
                                        <div className="flex flex-col items-start truncate flex-1">
                                            <span className="text-sm font-medium leading-none">Shadcn</span>
                                            <span className="text-xs text-muted-foreground truncate">m@example.com</span>
                                        </div>

                                        {/* Icon pushed to the far right */}
                                        <MoreHorizontal className="ml-auto shrink-0" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent side="right" align="start">

                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <span><Avatar><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback>  </Avatar>
                                            <p className="text-sm font-medium leading-none">Shadcn</p></span>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                m.doe@example.com
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User></User>
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard></CreditCard>
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MessageSquareDot />
                                        <span>Notifications</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <div className="p-2">
                                        <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                                            <LogOut></LogOut>
                                            Log out

                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}