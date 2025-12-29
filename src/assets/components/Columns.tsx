"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ChevronDown, CircleCheck, Loader, MoreVerticalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
    header: string,
    sectiontypes: string,

    status: "Done" | "In Process",
    target: number,
    limit: number,
    reviewer: "jhon doe" | "alex smith",


}

export const columns: ColumnDef<Task>[] = [


    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    {
        accessorKey: "header",
        header: "Header",
    },
    {
        accessorKey: "sectiontypes",
        header: "Section Types",
        cell: ({ row }) => {
            const value = row.getValue("sectiontypes") as string

            return (
                <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-0.5 font-medium bg-slate-100 text-slate-700 border-none uppercase text-[10px] tracking-wider"
                >
                    {value}
                </Badge>
            )
        },
    }, {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            return (
                <Badge
                    variant="secondary"
                    className={`rounded-full px-3 py-0.5 font-medium -700 border-none text-[10px] tracking-wider`}
                >
                    {status === "Done" ? (
                        <span className=" w-22 px-2 py-1 rounded-full flex items-center justify-center">
                            <CircleCheck className="inline-block mr-1 h-4 w-4 text-green-500" />
                            {status}
                        </span>
                    ) : (
                        <span className=" w-22 px-2 py-1 rounded-full">
                            <Loader className="inline-block mr-1 h-4 w-4  text-yellow-500 flex items-center justify-center" />
                            {status}
                        </span>
                    )}
                </Badge>
            )
        },
    },
    {
        accessorKey: "target",
        header: "Target",
        cell: ({ getValue, row: { index }, column: { id }, table }) => {
            const initialValue = getValue() as string
            const [value, setValue] = React.useState(initialValue)

            // Sync local state with server/parent data if it changes externally
            React.useEffect(() => {
                setValue(initialValue)
            }, [initialValue])

            const onBlur = () => {
                (table.options.meta as any)?.updateData(index, id, value)
            }

            return (
                <Input
                    type="string"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                    className="h-8 w-24"
                />
            )
        },
    },
    {
        accessorKey: "limit",
        header: "Limit",
        cell: ({ getValue, row: { index }, column: { id }, table }) => {
            const initialValue = getValue() as string
            const [value, setValue] = React.useState(initialValue)

            React.useEffect(() => {
                setValue(initialValue)
            }, [initialValue])

            const onBlur = () => {
                (table.options.meta as any)?.updateData(index, id, value)
            }

            return (
                <Input
                    type="string"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                    className="h-8 w-24"
                />
            )
        },
    },
    {

        accessorKey: "reviewer",
        header: "Reviewer",
        cell: ({ row, table, column }) => {
            const task = row.original

            // Access the update function we'll define in the main component
            const updateData = (table.options.meta as any)?.updateData

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            // justify-between spreads text to left and icon to right
                            className="h-8 w-[180px] justify-between bg-white border-gray-300 px-3 font-normal"
                        >
                            <span className="capitalize truncate">
                                {task.reviewer ? task.reviewer : "Assign a reviewer"}
                            </span>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[180px]">
                        <DropdownMenuItem onClick={() => updateData?.(row.index, column.id, "jhon doe")}>
                            Jhon Doe
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateData?.(row.index, column.id, "alex smith")}>
                            Alex Smith
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },


    

    },

    {
        id: "actions",
        cell: () => {
            
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                       
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Make a copy</DropdownMenuItem>
                        <DropdownMenuItem>Favourite</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuItem  className="text-red-600 focus:bg-red-50 focus:text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
  
    
]